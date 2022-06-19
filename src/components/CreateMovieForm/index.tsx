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
import { setReqStatusType } from "@customTypes/ErrorHandling";


export const CreateMovieForm: FC<setReqStatusType> = ({setReqStatus}:setReqStatusType) => {
  const [formStep, setFormStep] = useState<string>("Title");

  const methods = useForm<newMovieType>({
    resolver: yupResolver(newMovieSchema)
  });;
  const {
    handleSubmit,
  } = methods;

  const CreateMovieSubmit: SubmitHandler<newMovieType> = (data: newMovieType) => {
    const directorsIds = (data.directorsIds).split('');
    const dataMovie = {
      ...data,
      directorsIds: directorsIds.map(d => parseInt(d))
    }
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
      res.data?.errors
      ? setReqStatus({error:{ errorMessage: res.data.errors[0].message}})
      : setReqStatus({success: "Movie created successfully :D"})
    })
    .catch(err => 
      setReqStatus({error:{ 
        serverError: `${err}`,
        errorMessage: "Ups!, something went wrong, try later."
      }})
    )
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
