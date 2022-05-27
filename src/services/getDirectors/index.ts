import { getConfig } from "@utils/configReq";
import axios from "axios";

export const getDirectors = (setDirectors:any) => {
  const configReq = getConfig();
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}directors` : '',
    configReq
  )
  .then(res => {setDirectors(res.data)})
  .catch(err => console.error(err))
}