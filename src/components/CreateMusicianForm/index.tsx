import { newProducerType } from '@customTypes/createItemTypes';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { newProducerSchema } from '@schemas/createNewItemSchema';
import axios from 'axios';
import { CREATE_MUSICIAN } from '@services/mutations/create/musician';
import { setReqStatusType } from '@customTypes/ErrorHandling';


export const CreateMusicianForm: FC<setReqStatusType> = ({setReqStatus}:setReqStatusType) => {
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<newProducerType>({
    resolver: yupResolver(newProducerSchema)
  });
  const CreateMusicianSubmit: SubmitHandler<newProducerType> = (data: newProducerType) => {
    axios.post(
      process.env.API_URL !== undefined ? process.env.API_URL : '',
      CREATE_MUSICIAN(data),
      {
        headers: {
        'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      res.data?.errors
      ? setReqStatus({error:{ errorMessage: res.data.errors[0].message}})
      : setReqStatus({success: "Musician created successfully :D"})
    })
    .catch(err => 
      setReqStatus({error:{ 
        serverError: `${err}`,
        errorMessage: "Ups!, something went wrong, try later."
      }})
    )
  }
  return (
    <form
      className="flex flex-col items-center justify-center py-8 sm:m-auto"
      onSubmit={handleSubmit(CreateMusicianSubmit)}
    >
      <div className="flex flex-col">
        <label htmlFor="musicianName">Musician&apos;s Name </label>
        <input
          className="h-12 p-4 mt-2 mb-4 border-2 rounded-md shadow-sm w-60 sm:w-80 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          id="musicianName"
          {...register("name")}
          placeholder="introduce musician's name"
          type="text"
        />
        {errors.name && errors.name?.message && (
          <span className="text-xs text-red-500">{errors.name.message}</span>
        )}
      </div>
      <input
        className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52"
        type="submit"
        value="Create musician"
      />
    </form>
  );
};

