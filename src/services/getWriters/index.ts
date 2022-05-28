import { getConfig } from "@utils/configReq";
import axios from "axios";

export const getWriters = (setWriters:any) => {
  const configReq = getConfig();
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}writers` : '',
    configReq
  )
  .then(res => setWriters(res.data))
  .catch(err => console.error(err))
}
