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
import { setReqStatusMovieType } from "@customTypes/ErrorHandling";


export const CreateMovieForm: FC<setReqStatusMovieType> = ({setReqStatus, setShowCreateItem}:setReqStatusMovieType) => {
  const [formStep, setFormStep] = useState<string>("Title");
  const [movieId, setMovieId] = useState<number>(0);

  const methods = useForm<newMovieType>({
    resolver: yupResolver(newMovieSchema)
  });;
  const {
    register,
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
      console.log(res)
      setMovieId(parseInt(res.data.data.createAMovie.id));
      res.data?.errors
      ? setReqStatus({error:{ errorMessage: res.data.errors[0].message}})
      : setFormStep("Producers");
    })
    .catch(err => {
      console.error(err)
      setReqStatus({error:{ 
        serverError: `${err}`,
        errorMessage: "Ups!, something went wrong, try later."
      }})
    })
  }

  return (
    <React.Fragment>
      <FormProvider {...methods}>
        <form
          className="w-full overflow-y-scroll h-fit sm:overflow-auto"
          onSubmit={handleSubmit(CreateMovieSubmit)}
        >
          <input className="hidden" {...register('userName')} value='GUILLERMO'/>
          {formStep == "Title" && (
            <MovieTitleForm
              setShowCreateItem={setShowCreateItem}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
          {formStep == "Data" && (
            <MovieDataForm formStep={formStep} setFormStep={setFormStep} />
          )}
        </form>
      </FormProvider>
      {formStep == "Producers" && (
        <MovieProducersForm movieId={movieId}/>
      )}
    </React.Fragment>
  );
};
