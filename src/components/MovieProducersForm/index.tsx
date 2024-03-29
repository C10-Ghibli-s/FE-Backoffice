import { addPeopleFromSubmit, newProducerType } from "@customTypes/createItemTypes";
import React, { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AddPeopleSchema } from "@schemas/createNewItemSchema";


import Select from "react-select";
import { getProducers } from "@services/queries/getData/getProducers";
import axios from "axios";
import { ADD_PEOPLE } from "@services/mutations/AddPeople";

type movieIdType = {
  movieId: number,
}

export const MovieProducersForm: FC<movieIdType> = ({movieId}:movieIdType) => {
  const methods = useForm<addPeopleFromSubmit>({
    resolver: yupResolver(AddPeopleSchema)
  });;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const [directors, setDirectors] = useState<newProducerType[]>([]);
  const [writers, setWriters] = useState<newProducerType[]>([]);
  const [musicians, setMusicians] = useState<newProducerType[]>([]);

  useEffect(() => {
    setTimeout(
      () => getProducers({ setDirectors, setWriters, setMusicians }),
      1000
    );
  }, []);

  const CreateMovieSubmit: SubmitHandler<addPeopleFromSubmit> = (data: addPeopleFromSubmit) => {
    const directors = (data.directorsIds).split(',');
    const writers = (data.writersIds).split(',');
    const musicians = (data.musiciansIds).split(',');

    const directorsIds = directors.map(d => parseInt(d));
    const writersIds = writers.map(w => parseInt(w));
    const musiciansIds = musicians.map(m => parseInt(m));

    const addPeopleData = {
      movieId: data.movieId,
      directorsIds: directorsIds,
      writersIds: writersIds,
      musiciansIds: musiciansIds
    }
    axios.post(
      process.env.API_URL !== undefined ? process.env.API_URL : '',
      ADD_PEOPLE(addPeopleData),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
  }

  return (
    <form onSubmit={handleSubmit(CreateMovieSubmit)}>
      <div className="flex flex-col items-center justify-center m-auto sm:p-8">
        <div className="hidden">
          <input type="number" defaultValue={movieId} {...register('movieId')}/>
          {errors.movieId && errors.movieId?.message && (
            <span className="text-xs text-red-500">
              {errors.movieId.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="directorsIds">Directors*</label>
          <Select
            className="mt-2 mb-4 w-72"
            isMulti
            placeholder="choose one or more directors"
            onChange={e => {
              //@ts-ignore  // that field is always going to be there
              document.getElementById("directorsIds").value = e
                .map(director => director.value)
                .toString();
              //@ts-ignore  // mobile users can cancel scroll animation with touch
              e.cancelable = true;
            }}
            // @ts-ignore // the array of directors will always come from a request
            options={
              typeof directors !== "undefined"
                ? directors.map(director => ({
                    label: director.name,
                    value: director.id,
                  }))
                : [{ label: "choose a director", value: null }]
            }
          />
          {errors.directorsIds && errors.directorsIds?.message && (
            <span className="text-xs text-red-500">
              {errors.directorsIds.message}
            </span>
          )}
          <input
            type="text"
            className="hidden"
            id="directorsIds"
            {...register("directorsIds")}
          />
        </div>
        <div>
          <label htmlFor="writersIds">Writers*</label>
          <Select
            className="mt-2 mb-4 w-72"
            {...register("writersIds")}
            isMulti
            placeholder="choose one or more writers"
            onChange={e => {
              //@ts-ignore  // that field is always going to be there
              document.getElementById("writersIds").value = e
                .map(writer => writer.value)
                .toString();
              //@ts-ignore  // mobile users can cancel scroll animation with touch
              e.cancelable = true;
            }}
            // @ts-ignore
            options={
              typeof writers !== "undefined"
                ? writers.map(writer => ({
                    label: writer.name,
                    value: writer.id,
                  }))
                : [{ label: "choose a writer", value: null }]
            }
          />
          {errors.writersIds && errors.writersIds?.message && (
            <span className="text-xs text-red-500">
              {errors.writersIds.message}
            </span>
          )}
          <input
            type="text"
            className="hidden"
            id="writersIds"
            {...register("writersIds")}
          />
        </div>
        <div>
          <label htmlFor="musiciansIds">Musicians*</label>
          <Select
            className="mt-2 mb-4 w-72"
            {...register("musiciansIds")}
            isMulti
            placeholder="choose one or more musicians"
            onChange={e => {
              //@ts-ignore  // that field is always going to be there
              document.getElementById("musiciansIds").value = e
                .map(musician => musician.value)
                .toString();
              //@ts-ignore  // mobile users can cancel scroll animation with touch
              e.cancelable = true;
            }}
            // @ts-ignore
            options={
              typeof musicians !== "undefined"
                ? musicians.map(musician => ({
                    label: musician.name,
                    value: musician.id,
                  }))
                : [{ label: "choose a writer", value: null }]
            }
          />
          {errors.musiciansIds && errors.musiciansIds?.message && (
            <span className="text-xs text-red-500">
              {errors.musiciansIds.message}
            </span>
          )}
          <input
            type="text"
            className="hidden"
            id="musiciansIds"
            {...register("musiciansIds")}
          />
        </div>
        <div className="flex justify-center mt-4">
          <input
            className="p-2 mb-2 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 w-[200px] hover:cursor-pointer"
            type="submit"
            value="Add producers"
          />
        </div>
      </div>
    </form>
  );
};
