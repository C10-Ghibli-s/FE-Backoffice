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

export const getDirectors = (setDirectors:any) => {
  const configReq = getConfig();
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}directors` : '',
    configReq
  )
  .then(res => {setDirectors(res.data)})
  .catch(err => console.error(err))
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
