import axios from "axios";

export const getTitles = (setTitles:any) => {

}

export const getDirectors = (setDirectors:any) => {

}

export const getMusicians = (setMusicians:any) => {

}

export const getWriters = (setWriters:any) => {
}

export const getData = () => {
  axios.post(
    process.env.API_URL != undefined ? process.env.API_URL: '',
  )
  .then(res => console.log(res))
  .catch(err => console.error(err))
}
