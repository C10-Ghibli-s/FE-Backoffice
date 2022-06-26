import { useState, useEffect } from "react";
import { getPublic1, getPublic2, getAllWriters } from "../services/queries/getData/modules";

// useGetModules = (key, {setItems})
const useGetModules = (key) => {
  // When we have the api deployed this should be updated to use real data
  // or even use services/queries/getData/ and then each of the modules
  // users: getAllUsers, movies: getAllMovies, writers: getAllWriters, directors: getAllDirectors, musicians, getAllMusicians, roles: getAllRoles
  const objectPromises = { public1: getPublic1, public2: getPublic2, writes: getAllWriters };
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const promise = objectPromises[key];
  //   promise.then((response) => {
  //     console.log(response);
  //     setItems(response.data);
  //   });
  // }, []);

  useEffect(() => {
    const genericData = [
      { id: '1', title: 'A First Title', description: 'This is the description of first title', status: 'Active' },
      { id: '2', title: 'B Second Title', description: 'This is the description of second title', status: 'Inactive' },
      { id: '3', title: 'C Third Title', description: 'This is the description of third title', status: 'Active' },
      { id: '4', title: 'D Fourth Title', description: 'This is the description of fourth title', status: 'Inactive' },
      { id: '5', title: 'E Fifth Title', description: 'This is the description of fifth title', status: 'Active' },
      { id: '6', title: 'F Sixth Title', description: 'This is the description of sixth title', status: 'Active' },
    ];
    setItems(genericData);
  }, []);

  const searchValue = (textTyped) =>{
    console.log("Hello soy searchFilter function from hooks..", textTyped);
    const newArray = [...items];
    const resultArray = 
    textTyped === ""
      ? items
      : newArray.filter((item) =>
      item.title
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(textTyped.toLowerCase().replace(/\s+/g, "")));
    setItems(resultArray);
  };

  // it should get property as well
  const orderItems = (order)=>{
    console.log("this is orderItems", order);
    const sortPropertyNumber = "id";
    const sortPropertyString = "title";
    const newArray = [...items];
    const sortedNumber =
    order.name === "Ascendent"
      ? newArray.sort((firstItem, secondItem) => firstItem[sortPropertyNumber] - secondItem[sortPropertyNumber])
      : newArray.sort((firstItem, secondItem) => secondItem[sortPropertyNumber] - firstItem[sortPropertyNumber]);
    
    const sortedString =
    order.name === "Ascendent"
      ? newArray.sort((firstItem, secondItem) => firstItem[sortPropertyString].localeCompare(secondItem[sortPropertyString]))
      : newArray.sort((firstItem, secondItem) => secondItem[sortPropertyString].localeCompare(firstItem[sortPropertyString]));
  
    setItems(sortedString);
  };

  const filterStatus = (filter, items)=>{
    console.log("Hello from filterStatus ..", filter);
    const newArray = [...items];
    if (filter.name == 'All') {
      setItems(newArray);
    } else{
      const resultArray = newArray.filter(item => item.status == filter.name);
      setItems(resultArray);
    }
  };

  return{items, setItems, searchValue, orderItems, filterStatus};
}

export { useGetModules };