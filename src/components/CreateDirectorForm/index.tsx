import { newDirectorType } from '@customTypes/createItemTypes';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { newDirectorSchema } from '@schemas/createNewItemSchema';
import axios from 'axios';
import { CREATE_DIRECTOR } from '@services/mutations/create/director';
import { setReqStatusType } from '@customTypes/ErrorHandling';


export const CreateDirectorForm: FC<setReqStatusType> = ({setReqStatus}:setReqStatusType) => {
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
      res.data?.errors
      ? setReqStatus({error:{ errorMessage: res.data.errors[0].message}})
      : setReqStatus({success: "Director created successfully :D"})
    })
    .catch(err => 
      setReqStatus({error:{ 
        serverError: `${err}`,
        errorMessage: "Ups!, something went wrong, try later."
      }})
    )
  }
  return(
    <form className="py-8 flex flex-col items-center justify-center sm:m-auto" onSubmit={handleSubmit(CreateDirectorSubmit)}>
      <div className="flex flex-col">
        <label htmlFor='directorName'>Director&apos;s Name </label>
          <input className="h-12 w-60 sm:w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" id='directorName' {...register('name')} placeholder="introduce director's name" type="text"/>
          {errors.name && errors.name?.message && <span className='text-xs text-red-500'>{errors.name.message}</span>}
      </div>
      <input className="w-48 p-4 border border-sky-600 hover:cursor-pointer hover:bg-sky-600 hover:text-white rounded-2xl" type="submit" value="Create director"/>
    </form>
  );
};

