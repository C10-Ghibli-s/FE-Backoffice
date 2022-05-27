import { newTitleType } from "@customTypes/createItemTypes";
import React, { FC } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newTitleSchema } from "@schemas/createNewItemSchema";
import { CreateTitleSubmit } from "@services/CreateFormSubmit";

export const CreateTitleForm: FC = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<newTitleType>({
    resolver: yupResolver(newTitleSchema)
  });
  return(
    <form onSubmit={handleSubmit(CreateTitleSubmit)}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="email" id="title" placeholder="movie title" {...register('title')}/>
        {errors.title && errors.title?.message && <span className='text-xs text-red-500'>{errors.title.message}</span>}
      </div>
      <div>
        <label htmlFor="originalTitle">Original title</label>
        <input type="text" id="originalTitle" placeholder="original movie title" {...register('originalTitle')}/>
        {errors.originalTitle && errors.originalTitle?.message && <span className='text-xs text-red-500'>{errors.originalTitle.message}</span>}
      </div>
      <div>
        <label htmlFor="romajiTitle">Romaji title</label>
        <input type="text" id="romajiTitle" placeholder="romaji title" {...register('romajiTitle')}/>
        {errors.romajiTitle && errors.romajiTitle?.message && <span className='text-xs text-red-500'>{errors.romajiTitle.message}</span>}
      </div>
    </form>
  );
};

