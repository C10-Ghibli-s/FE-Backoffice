import { getConfig } from "@utils/configReq";
import axios from "axios";

export const getMusicians = (setMusicians:any) => {
  const configReq = getConfig();
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}musicians` : '',
    configReq
  )
  .then(res => setMusicians(res.data))
  .catch(err => console.error(err))
}
