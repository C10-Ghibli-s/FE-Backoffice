import { getConfig } from "@utils/configReq";
import axios from "axios";
import { newTitleType } from "@customTypes/createItemTypes";

export const getTitles = () => {
  const configReq = getConfig();
  let titlesList:  newTitleType[] = [];
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}titles` : '',
    configReq
  )
  .then(res => titlesList = res.data)
  .catch(err => console.error(err))
  return titlesList;
}
