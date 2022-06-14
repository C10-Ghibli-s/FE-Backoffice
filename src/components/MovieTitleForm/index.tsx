import React, { FC, SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';

type formSteping = {
  formStep:string,
  setFormStep: React.Dispatch<SetStateAction<string>>
}

export const MovieTitleForm: FC<formSteping> = ({formStep, setFormStep}: formSteping) => {
  const methods = useFormContext();
  const { register, formState: {errors} } = methods;
  return (
    <div className="sm:p-8 flex flex-col justify-center items-center m-auto">
      <div className="flex flex-col">
        <label htmlFor="title">Title*</label>
        <input className="h-12 w-56 sm:w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" id="title" placeholder="movie title" {...register('title')}/>
        {errors.title && errors.title?.message && <span className='text-xs text-red-500'>{errors.title.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="originalTitle">Original title*</label>
        <input className="h-12 w-56 sm:w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" id="originalTitle" placeholder="original movie title" {...register('originalTitle')}/>
        {errors.originalTitle && errors.originalTitle?.message && <span className='text-xs text-red-500'>{errors.originalTitle.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="romajiTitle">Romaji title</label>
        <input className="h-12 w-56 sm:w-80 mt-2 mb-4 p-4 border-2 border-slate-200 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" id="romajiTitle" placeholder="romaji title" {...register('romajiTitle')}/>
        {errors.romajiTitle && errors.romajiTitle?.message && <span className='text-xs text-red-500'>{errors.romajiTitle.message}</span>}
      </div>
      {(formStep == "Title" || formStep == "Data") && 
        <button 
          className="sm:absolute sm:bottom-12 my-4 sm:right-12 sm:m-0 w-48 p-4 border border-sky-600 hover:cursor-pointer bg-sky-200/20 hover:bg-sky-600 hover:text-white rounded-2xl" onClick={() => 
            formStep == "Title" 
            ? setFormStep("Data") 
            : setFormStep("Producers")
          }
        >
          Next
        </button>
      }
      <button 
        className="sm:absolute sm:bottom-12 sm:left-12 w-48 p-4 border border-red-700 hover:cursor-pointer bg-red-200/20 hover:bg-red-700 hover:text-white rounded-2xl"
        onClick={() => {setFormStep("canceling")}}
      >
        Cancel
      </button>
    </div>
  );
};

