import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import {
  newUserType,
  titlesType,
  newMovieType,
  newWriterType,
  newDirectorType,
  newMusicianType
} from "@customTypes/createItemTypes";
import { getConfig } from "@utils/configReq";


export const CreateUserSubmit: SubmitHandler<newUserType> = (data: newUserType) => {
  const configReq = getConfig();
  axios.post(
    process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}users/signup` : '',
    data,
    configReq
  )
  .then(res => console.log(res))
  .catch(err => console.error(err))
}
export const CreateTitleSubmit: SubmitHandler<titlesType> = (data: titlesType) => {
  
}
export const CreateMovieSubmit: SubmitHandler<newMovieType> = (data: newMovieType) => {

}
export const CreateWriterSubmit: SubmitHandler<newWriterType> = (data: newWriterType) => {

}
export const CreateDirectorSubmit: SubmitHandler<newDirectorType> = (data: newDirectorType) => {

}
export const CreateMusicianSubmit: SubmitHandler<newMusicianType> = (data: newMusicianType) => {

}