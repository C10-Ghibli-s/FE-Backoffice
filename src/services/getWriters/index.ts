import { getConfig } from "@utils/configReq";
import axios from "axios";
import { newWriterType } from "@customTypes/createItemTypes";

export const getWriters = () => {
  const configReq = getConfig();
  let writersList:  newWriterType[] = [];
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}titles` : '',
    configReq
  )
  .then(res => writersList = res.data)
  .catch(err => console.error(err))
  return writersList;
}
