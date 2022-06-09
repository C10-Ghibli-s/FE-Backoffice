import React, { FC, useState } from "react";

import { newMovieType } from "@customTypes/createItemTypes";
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newMovieSchema } from "@schemas/createNewItemSchema";

import { MovieTitleForm } from "@components/MovieTitleForm"
import { MovieDataForm } from "@components/MovieDataForm";
import { MovieProducersForm } from "@components/MovieProducersForm";


export const CreateMovieForm: FC = () => {
  const [formStep, setFormStep] = useState<string>("Title");

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
      <FormProvider {...methods}>
        <form className="md:flex justify-center" onSubmit={handleSubmit(CreateMovieSubmit)}>
          {formStep == "Title" && <MovieTitleForm/>}
          {formStep == "Data" && <MovieDataForm/>}
          {formStep == "Producers" && <MovieProducersForm/>}
          {(formStep == "Title" || formStep == "Data") && 
            <button 
              className="absolute bottom-12 right-12 w-48 p-4 border border-sky-600 hover:cursor-pointer bg-sky-200/20 hover:bg-sky-600 hover:text-white rounded-2xl" onClick={() => 
                formStep == "Title" 
                ? setFormStep("Data") 
                : setFormStep("Producers")
              }
            >
              Next
            </button>
          }
          <button 
            className="absolute bottom-12 left-12 w-48 p-4 border border-red-700 hover:cursor-pointer bg-red-200/20 hover:bg-red-700 hover:text-white rounded-2xl"
            onClick={() => {setFormStep("canceling")}}
          >
            Cancel
          </button>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};
