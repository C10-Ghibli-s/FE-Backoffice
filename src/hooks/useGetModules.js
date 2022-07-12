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

  const searchValue = (textTyped) => {
    const newArray = [...items];
    const resultArray =
      textTyped === ""
        ? items
        : newArray.filter((item) =>
            item?.nickname?.toLowerCase().replace(/\s+/g, "").includes(textTyped.toLowerCase().replace(/\s+/g, "")) ||
            item?.name?.toLowerCase().replace(/\s+/g, "").includes(textTyped.toLowerCase().replace(/\s+/g, "")) ||
            item?.title?.title.toLowerCase().replace(/\s+/g, "").includes(textTyped.toLowerCase().replace(/\s+/g, ""))
          );
    setItems(resultArray);
  };

  const orderItems = (order, titleModule) => {
    const sortPropertyNumber = "id";
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
    const sortedNumber =
      order === "Ascendent"
        ? newArray.sort(
            (firstItem, secondItem) =>
              firstItem[sortPropertyNumber] - secondItem[sortPropertyNumber]
          )
        : newArray.sort(
            (firstItem, secondItem) =>
              secondItem[sortPropertyNumber] - firstItem[sortPropertyNumber]
          );

    const sortedString =
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
