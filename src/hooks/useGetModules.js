import { useState, useEffect } from "react";
import { GET_ITEM } from "@services/queries/getData/getItem";
import axios from "axios";

// useGetModules = (key, {setItems})
const useGetModules = (titleModule) => {
  // When we have the api deployed this should be updated to use real data
  // or even use services/queries/getData/ and then each of the modules
  // users: getAllUsers, movies: getAllMovies, writers: getAllWriters, directors: getAllDirectors, musicians, getAllMusicians, roles: getAllRoles
  const [items, setItems] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .post(
          process.env.API_URL !== undefined ? process.env.API_URL : "",
          // @ts-ignore
          GET_ITEM(titleModule),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.data?.showAllUsers)
            setItems(response.data.data.showAllUsers);
          if (response.data.data?.showAllMovies)
            setItems(response.data.data.showAllMovies);
          if (response.data.data?.showAllWriters)
            setItems(response.data.data.showAllWriters);
          if (response.data.data?.showAllDirectors)
            setItems(response.data.data.showAllDirectors);
          if (response.data.data?.showAllMusicians)
            setItems(response.data.data.showAllMusicians);
          console.log("response: ", response.data.data.showAllUsers);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("ModuleData: ", items, "QUERY : ", titleModule);
    }, 1000);
  }, []);

  const searchValue = (textTyped, allItems) => {
    const newArray = [...allItems];
    const resultArray =
      textTyped === ""
        ? newArray
        : newArray.filter((item) =>
            item?.nickname?.toLowerCase().replace(/\s+/g, "").includes(textTyped.toLowerCase().replace(/\s+/g, "")) ||
            item?.name?.toLowerCase().replace(/\s+/g, "").includes(textTyped.toLowerCase().replace(/\s+/g, "")) ||
            item?.title?.title.toLowerCase().replace(/\s+/g, "").includes(textTyped.toLowerCase().replace(/\s+/g, ""))
          );
    setItems(resultArray);
  };

  const orderItems = (order, titleModule) => {
    let sortPropertyString = "name";
    console.log({ titleModule });
    if (titleModule === "Movies") {
      sortPropertyString = "title";
    } else if (titleModule === "Users") {
      sortPropertyString = "nickname";
    } else {
      console.log("No sort property");
    }
    const newArray = [...items];
    
    let sortedString="";
    if(titleModule === "Movies"){
      sortedString =
      order.name === "Ascendent"
        ? newArray.sort((firstItem, secondItem) =>
            firstItem[sortPropertyString]["title"].localeCompare(
              secondItem[sortPropertyString]["title"]
            )
          )
        : newArray.sort((firstItem, secondItem) =>
            secondItem[sortPropertyString]["title"].localeCompare(
              firstItem[sortPropertyString]["title"]
            )
        );
    } else{
      sortedString =
      order.name === "Ascendent"
        ? newArray.sort((firstItem, secondItem) =>
            firstItem[sortPropertyString].localeCompare(
              secondItem[sortPropertyString]
            )
          )
        : newArray.sort((firstItem, secondItem) =>
            secondItem[sortPropertyString].localeCompare(
              firstItem[sortPropertyString]
            )
        );
    }

    setItems(sortedString);
  };

  const filterStatus = (filter, items) => {
    const newArray = [...items];
    if (filter.name == "ALL") {
      setItems(newArray);
    } else {
      const resultArray = newArray.filter((item) => item.status == filter.name);
      setItems(resultArray);
    }
  };

  return { items, setItems, searchValue, orderItems, filterStatus };
};

export { useGetModules };
