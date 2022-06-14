import { getConfig } from "@utils/configReq";
import axios from "axios";

export const getTitles = (setTitles:any) => {
  const configReq = getConfig();
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}titles` : '',
    configReq
  )
  .then(res => { setTitles(res.data) })
  .catch(err => console.error(err))
}

export const getDirectors = async() => {
  const configReq = getConfig();
  const director = await axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}directors` : '',
    configReq
  )
  .then(res => res.data)
  .catch(err => console.error(err))
  return director;
}

export const getMusicians = (setMusicians:any) => {
  const configReq = getConfig();
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}musicians` : '',
    configReq
  )
  .then(res => setMusicians(res.data))
  .catch(err => console.error(err))
}

export const getWriters = (setWriters:any) => {
  const configReq = getConfig();
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}writers` : '',
    configReq
  )
  .then(res => setWriters(res.data))
  .catch(err => console.error(err))
}

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
