import React, { FC, useEffect, useState } from 'react';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Types_ActiveSession, Types_SessionForm } from '@customTypes/LoginTypes';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginForm: FC = () => {
  const router = useRouter();
  const [sessionStatus, setSessionStatus] = useState<string|Types_ActiveSession>("");
  
  useEffect(()=> {
    window.localStorage.setItem("localActiveSession", "no active session");
  }, []);

  const ValidationSessionForm_schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().min(8).max(20).required(),
  });
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<Types_SessionForm>({
    resolver: yupResolver( ValidationSessionForm_schema )
  });

  const LoginFormSubmitHandler: SubmitHandler<Types_SessionForm> = (data: Types_SessionForm) => {
    axios
    .post<Types_ActiveSession>(
      "https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/login/nickname", 
      { 
        nickname: data.name , password: data.password
      }
    )
    .then(res => {
      if(res.data.user.role == "admin") {
        let userSession = {
          user: {
            nickname: res.data.user.nickname,
            role: res.data.user.role,
          },
          access_token: res.data.access_token
        };
        window.localStorage.setItem("localActiveSession", JSON.stringify(userSession));
        setSessionStatus(userSession);
        router.push('/')
      } else {
        setSessionStatus("authError");
      }
    })
    .catch(err => {
      console.error(err)
      setSessionStatus("authError")
    });
  }

  return (
    <form className='mt-10 md:mt-0 flex flex-col content-center' onSubmit={handleSubmit(LoginFormSubmitHandler)}>
      <div className='flex flex-col'>
        <input alt="username" className='border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:border-sky-600 focus:z-10 pl-2 p-1 w-72 m-auto' type='text' placeholder="Username" defaultValue="" {...register('name')}/>
        {errors.name && errors.name?.message && <span className="text-xs text-red-500">{errors.name.message}</span>}
      </div>
      <div className='flex flex-col'>
        <input alt="password" className='border border-gray-300 placeholder-gray-500 rounded-b-md focus:outline-none focus:border-sky-600 focus:z-10 pl-2 p-1 w-72 m-auto' type="password" placeholder='Password' defaultValue="" {...register('password')}/>
        {errors.password && errors.password?.message && <span className='text-xs text-red-500'>{errors.password.message}</span>}
        {sessionStatus === "authError" && <span className='text-xs text-red-500'>user or password incorrect</span>}
      </div>
      <input alt="submitLoginForm" className='mx-auto w-3/4 bg-sky-500 hover:bg-sky-600 rounded-lg text-white mt-10 p-1 cursor-pointer' type="submit" value="Login"/>
    </form>
  );
};

export default LoginForm;

