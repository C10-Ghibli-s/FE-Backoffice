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
