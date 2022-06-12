import React, { FC } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { CREATE_USER } from '@services/mutations/create/user'; 
import { newUserType } from '@customTypes/createItemTypes';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { newUserSchema } from '@schemas/createNewItemSchema';

export const CreateUserForm: FC = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<newUserType>({
    resolver: yupResolver(newUserSchema)
  });
  const rolesOptions = [{label:"USER", value:2}, {label:"ADMIN", value:1}]
  const CreateUserSubmit: SubmitHandler<newUserType> = (data: newUserType) => {
    axios.post(
      process.env.API_URL !== undefined ? process.env.API_URL : '',
      CREATE_USER(data),
      {
        headers: {
        'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => console.error(err))
  }
  return(
    <form className="p-8 flex flex-col items-center justify-center" onSubmit={handleSubmit(CreateUserSubmit)}>
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
          options={rolesOptions.map(role => ({label: role.label, value:role.value}))}
        />
        {errors.role && errors.role?.message && <span className='text-xs text-red-500'>{errors.role.message}</span>}
        <input defaultValue="2" {...register('role')} id='role' className='hidden' type="text"/>
      </div>
      <input className="w-48 p-4 border border-sky-600 hover:cursor-pointer hover:bg-sky-600 hover:text-white rounded-2xl" type="submit" value="Create user"/>
    </form>
  );
};

