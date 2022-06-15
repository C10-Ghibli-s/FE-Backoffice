import React, { FC, useState } from "react";

import { newMovieType } from "@customTypes/createItemTypes";
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newMovieSchema } from "@schemas/createNewItemSchema";

import { MovieTitleForm } from "@components/MovieTitleForm"
import { MovieDataForm } from "@components/MovieDataForm";
import { MovieProducersForm } from "@components/MovieProducersForm";
import axios from "axios";
import { CREATE_MOVIE } from "@services/mutations/create/movie";


export const CreateMovieForm: FC = () => {
  const [formStep, setFormStep] = useState<string>("Title");

  const methods = useForm<newMovieType>({
    resolver: yupResolver(newMovieSchema)
  });;
  const {
    handleSubmit,
  } = methods;

  const CreateMovieSubmit: SubmitHandler<newMovieType> = (data: newMovieType) => {
    axios.post(
      process.env.API_URL !== undefined ? process.env.API_URL : '',
      CREATE_MOVIE(data),
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
    <React.Fragment>
      <FormProvider {...methods}>
        <form className="overflow-y-scroll" onSubmit={handleSubmit(CreateMovieSubmit)}>
          {formStep == "Title" && <MovieTitleForm formStep={formStep} setFormStep={setFormStep}/>}
          {formStep == "Data" && <MovieDataForm formStep={formStep} setFormStep={setFormStep}/>}
          {formStep == "Producers" && <MovieProducersForm setFormStep={setFormStep}/>}
        </form>
      </FormProvider>
    </React.Fragment>
  );
};
