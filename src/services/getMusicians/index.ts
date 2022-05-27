import { getConfig } from "@utils/configReq";
import axios from "axios";
import { newMusicianType } from "@customTypes/createItemTypes";

export const getMusicians = () => {
  const configReq = getConfig();
  let musiciansList:  newMusicianType[] = [];
  axios.get(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}titles` : '',
    configReq
  )
  .then(res => musiciansList = res.data)
  .catch(err => console.error(err))
  return musiciansList;
}
