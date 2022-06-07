import { newUserType } from "@customTypes/createItemTypes";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newUserSchema } from "@schemas/createNewItemSchema";
import axios from "axios";
import { useRouter } from "next/router";
import Select from "react-select";
import type { NextPage } from "next";

const CreateUserForm: NextPage = () => {
  const router = useRouter();
  const [formStatus, setFormStatus] = useState<string>("");
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<newUserType>({
    resolver: yupResolver(newUserSchema)
  });
  const rolesOptions = ["USER", "ADMIN"]
  const CreateUserSubmit: SubmitHandler<newUserType> = (data: newUserType) => {
    axios.post(
      'http://localhost:3000/graphql',
      {
        query: `mutation CreateUser($data: UserInput!) {
          createUser(data: $data) {
            status
            nickname
            id
          }
        }`,
        variables: {
          "data": {
            "status": "ACTIVE",
            "nickname": `${data.nickname}`,
            "password": `${data.password}`,
            "name": `${data.role}`
          }
        }
      },
      {
        headers: {
        'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
      res.status === 200
      ? setFormStatus("success")
      : setFormStatus("failed")
    })
    .catch(err => console.error(err))
  }
  return(
    <main className="bg-slate-200/40">
      <h1 className="absolute p-2 top-10 left-1/4 text-3xl border-l-4 border-sky-600">Create user</h1>
      <form className="h-screen w-screen flex flex-col items-center justify-center" onSubmit={handleSubmit(CreateUserSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="email">email</label>
          <input className="h-12 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="email" id="email" placeholder="email" {...register('email')}/>
          {errors.email && errors.email?.message && <span className='text-xs text-red-500'>{errors.email.message}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="nickname">user name</label>
          <input className="h-12 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" id="nickname" placeholder="nickname" {...register('nickname')}/>
          {errors.nickname && errors.nickname?.message && <span className='text-xs text-red-500'>{errors.nickname.message}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">password</label>
          <input className="h-12 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="password" id="password" placeholder="password" {...register('password')}/>
          {errors.password && errors.password?.message && <span className='text-xs text-red-500'>{errors.password.message}</span>}
        </div>
        <div className="flex flex-col mb-10">
          <label className="w-80 mb-2" htmlFor="role">role</label>
          <Select
            // @ts-ignore
            onChange={e => document.getElementById('role').value = e.value}
            placeholder="choose a role"
            options={rolesOptions.map(role => ({label: role, value:role}))}
          />
          {errors.role && errors.role?.message && <span className='text-xs text-red-500'>{errors.role.message}</span>}
          <input {...register('role')} id='role' className="hidden" type="text"/>
        </div>
        <input className="w-48 p-4 border border-sky-600 hover:cursor-pointer hover:bg-sky-600 hover:text-white rounded-2xl" type="submit" value="Create user"/>
      </form>
    </main>
  );
};


export default CreateUserForm;
