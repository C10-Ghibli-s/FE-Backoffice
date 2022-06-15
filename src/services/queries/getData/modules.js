import axios from "axios";

export const getPublic1 = ()=>
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>{
    return(response.data)
  });


export const getPublic2 = ()=>
  axios.get('https://ghibliapi.herokuapp.com/films')
  .then((response)=>{
    return(response.data)
  });