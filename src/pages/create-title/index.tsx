import { titlesType } from "@customTypes/createItemTypes";
import React, { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newTitleSchema } from "@schemas/createNewItemSchema";
import axios from "axios";
import { getConfig } from "@utils/configReq";
import { getTitles } from "@services/getData";
import type { NextPage } from "next";
import { useRouter } from "next/router";


const CreateTitleForm: NextPage = () => {
  const router = useRouter();
  const [titles, setTitles] = useState<titlesType[]>([]);
  useEffect(() => {
    getTitles(setTitles)
  }, [])
  const methods = useForm<titlesType>({
    resolver: yupResolver(newTitleSchema)
  });;
  const {
    handleSubmit,
    register,
    formState: {errors}
  } = methods;
  const onTitleSubmit: SubmitHandler<titlesType> = (data:titlesType) => {
    const configReq = getConfig();
    axios.post(
      process.env.API_URL_KEY != undefined ? `${process.env.API_URL_KEY}titles` : '',
      data,
      configReq
    )
    .then(res => {
      router.push(`/create/movie?title=${data.title}`);
    })
    .catch(err => console.error(err))
  }

  return(
    <main className="bg-slate-200/40">
      <h1 className="absolute p-2 top-10 left-1/4 text-3xl border-l-4 border-sky-600">Create title</h1>
      <form onSubmit={handleSubmit(onTitleSubmit)}>
        <div className="flex flex-col justify-center items-center m-auto h-screen">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input className="h-12 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" id="title" placeholder="movie title" {...register('title')}/>
            {errors.title && errors.title?.message && <span className='text-xs text-red-500'>{errors.title.message}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="originalTitle">Original title</label>
            <input className="h-12 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" id="originalTitle" placeholder="original movie title" {...register('originalTitle')}/>
            {errors.originalTitle && errors.originalTitle?.message && <span className='text-xs text-red-500'>{errors.originalTitle.message}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="romajiTitle">Romaji title</label>
            <input className="h-12 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" id="romajiTitle" placeholder="romaji title" {...register('romajiTitle')}/>
            {errors.romajiTitle && errors.romajiTitle?.message && <span className='text-xs text-red-500'>{errors.romajiTitle.message}</span>}
          </div>
          <input type="submit" className=" absolute bottom-44 right-44 w-48 p-4 border border-sky-600 hover:cursor-pointer bg-sky-200/20 hover:bg-sky-600 hover:text-white rounded-2xl" value="Next"/>
        </div>
      </form>
    </main>
  );
};

export default CreateTitleForm;