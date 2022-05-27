import { getConfig } from "@utils/configReq";
import axios from "axios";
import { newDirectorType } from "@customTypes/createItemTypes";

export const getDirectors = () => {
  const configReq = getConfig();
  let directorsList:  newDirectorType[] = [];
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}titles` : '',
    configReq
  )
  .then(res => directorsList = res.data)
  .catch(err => console.error(err))
  return directorsList;
}