import { newDirectorType } from '@customTypes/createItemTypes';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { newDirectorSchema } from '@schemas/createNewItemSchema';
import axios from 'axios';
import { CREATE_DIRECTOR } from '@services/mutations/create/director';


export const CreateDirectorForm: FC = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<newDirectorType>({
    resolver: yupResolver(newDirectorSchema)
  });
  const CreateDirectorSubmit: SubmitHandler<newDirectorType> = (data: newDirectorType) => {
    axios.post(
      process.env.API_URL !== undefined ? process.env.API_URL : '',
      CREATE_DIRECTOR(data),
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
    <form className="p-8 flex flex-col items-center justify-center" onSubmit={handleSubmit(CreateDirectorSubmit)}>
      <div className="flex flex-col">
        <label htmlFor='directorName'>Director&apos;s Name </label>
          <input className="h-12 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" id='directorName' {...register('name')} placeholder="introduce director's name" type="text"/>
          {errors.name && errors.name?.message && <span className='text-xs text-red-500'>{errors.name.message}</span>}
      </div>
      <input className="w-48 p-4 border border-sky-600 hover:cursor-pointer hover:bg-sky-600 hover:text-white rounded-2xl" type="submit" value="Create director"/>
    </form>
  );
};

