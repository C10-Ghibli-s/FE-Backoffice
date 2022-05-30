import { onPreviewImage } from '@utils/onPreviewImage';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';


export const MovieDataForm: FC = () => {
  const [image, setImage] = useState<any>("https://ih1.redbubble.net/image.3083717230.4980/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg")
  const methods = useFormContext();
  const { register, formState: {errors} } = methods;
  return (
  <React.Fragment>
    <div className="p-8 mt-24">
      <div className="flex flex-col">
        <label htmlFor="titleId">Title*</label>
        <input {...register('titleId')} type="number" id="titleId" className=""/>
        {errors.titleId && errors.titleId?.message && <span className='text-xs text-red-500 max-w-xs'>{errors.titleId.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="releaseDate">Realease date*</label>
        <input className="h-12 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="date" min="1950-01-01" max="2030-01-01" id="releaseDate" placeholder="yyyy-mm-dd" {...register('releaseDate')}></input>
        {errors.releaseDate && errors.releaseDate?.message && <span className='text-xs text-red-500'>{errors.releaseDate.message}</span>}
      </div>              
      <div className="flex flex-col">
        <label htmlFor="duration">Duration*</label>
        <input className="h-12 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" id="duration" type="text" placeholder="movie duration" {...register('duration')}/>
        {errors.duration && errors.duration?.message && <span className='text-xs text-red-500 max-w-xs'>{errors.duration.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description*</label>
        <textarea className="min-h-full max-h-80 w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" id="description" placeholder="movie description" {...register('description')}/>
        {errors.description && errors.description?.message && <span className='text-xs text-red-500'>{errors.description.message}</span>}
      </div>
    </div>
    <div className="flex flex-col items-center">
      <div className="p-2 w-96 h-96 mb-6 md:mt-32 border-2 border-slate-400/40 rounded-xl">
        <Image width="500" height="500" className="object-scale-down" src={image} alt="Movie banner preview" />
      </div>
      <div>
        <label className="w-48 p-4 border border-sky-600 hover:cursor-pointer hover:bg-sky-600 hover:text-white rounded-2xl" htmlFor="movieBanner">Movie banner</label>
        <input className="hidden" type="file" id="movieBanner" {...register('movieBanner')} onChange={(e) => onPreviewImage(e, setImage)}/>
      </div>
    </div>
  </React.Fragment>
  );
};
