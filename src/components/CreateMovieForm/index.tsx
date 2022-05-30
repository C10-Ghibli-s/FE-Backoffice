import React, { FC, useEffect, useState } from "react";

import { newMovieType, titlesType } from "@customTypes/createItemTypes";
import { getTitles, getDirectors, getWriters, getMusicians} from '@services/getData';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newMovieSchema } from "@schemas/createNewItemSchema";

import { MovieDataForm } from "@components/MovieDataForm";
import { MovieProducersForm } from "@components/MovieProducersForm";


export const CreateMovieForm: FC = () => {
  const [formStep, setFormStep] = useState<string>("movie data");

  const methods = useForm<newMovieType>({
    resolver: yupResolver(newMovieSchema)
  });;
  const {
    handleSubmit,
  } = methods;

  const CreateMovieSubmit: SubmitHandler<newMovieType> = (data: newMovieType) => {
    console.log(data)
  }

  return(
    <React.Fragment>
      <h1 className="absolute p-2 top-10 left-1/4 text-3xl border-l-4 border-sky-600">Create Movie - {formStep}</h1>
      <FormProvider {...methods}>
        <form className="md:flex justify-center m-auto h-screen" onSubmit={handleSubmit(CreateMovieSubmit)}>
          {formStep == "movie data" &&
            <MovieDataForm/>
          }
          {formStep == "producers" && 
            <MovieProducersForm/>
          }
          {formStep == "movie data" && 
            <button className="absolute bottom-44 right-60 w-48 p-4 border border-sky-600 hover:cursor-pointer bg-sky-200/20 hover:bg-sky-600 hover:text-white rounded-2xl" onClick={() => setFormStep("producers")}>
              Next
            </button>
          }
          <button className="absolute bottom-44 left-60 w-48 p-4 border border-red-700 hover:cursor-pointer bg-red-200/20 hover:bg-red-700 hover:text-white rounded-2xl">
            Cancel
          </button>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};
