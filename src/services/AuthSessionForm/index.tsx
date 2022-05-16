import { SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';

export type AuthSessionForm = {
  name: string;
  password: string;
}

export const AuthSessionForm_schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().min(4).max(20).required(),
})


export const LoginFormSubmitHandler: SubmitHandler<AuthSessionForm> = (data: AuthSessionForm) => {
  axios
  .post(
    "https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/login/nickname", 
    { nickname: data.name , password: data.password }
  )
  .then(response => {})
  .catch(err => console.error(err))
}

