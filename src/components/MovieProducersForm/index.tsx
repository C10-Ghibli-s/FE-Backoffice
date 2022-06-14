import { newDirectorType, newMusicianType, newWriterType } from '@customTypes/createItemTypes';
import React, { FC, SetStateAction, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from 'react-select';
import { getProducers } from '@services/queries/getData/getProducers';

type stepForm = {
  setFormStep: React.Dispatch<SetStateAction<string>>
}

export const MovieProducersForm: FC<stepForm> = ({setFormStep}: stepForm) => {
  const methods = useFormContext();
  const { register, formState: {errors} } = methods;

  const [directors, setDirectors] = useState<newDirectorType[]>([]);
  const [writers, setWriters] = useState<newWriterType[]>([]);
  const [musicians, setMusicians] = useState<newMusicianType[]>([]); 

  useEffect(() => {
    setTimeout(() => getProducers({setDirectors, setWriters, setMusicians}), 1000)
  }, [])

  return(
    <div className='relative pb-48'>
    <div className="sm:p-8 sm:mt-24 md:mt-12 flex flex-col justify-center items-center">
      <div>
        <label htmlFor="directorsIds">Directors*</label>
        <Select 
          className="w-72 mt-2 mb-4"
          isMulti
          placeholder="choose one or more directors"
          //@ts-ignore
          onChange={e => document.getElementById('directorsIds').value = e}
          // @ts-ignore
          options={
            typeof directors !== "undefined"
            ? directors.map(director =>  ({ label: director.name, value: director.id }))
            : [{ label: 'choose a director', value: null}]
          }
        />
        <input type="text" className='hidden' id='directorsIds' {...register('directorsIds')}/>
      </div>
      <div>
        <label htmlFor="writersIds">Writers*</label>
        <Select 
          className="w-72 mt-2 mb-4"
          {...register("writersIds")}
          isMulti
          placeholder="choose one or more writers"
          onChange={e => console.log(e)}
          // @ts-ignore
          options={
            typeof writers !== "undefined"
            ? writers.map(writer =>  ({ label: writer.name, value: writer.id }))
            : [{ label: 'choose a writer', value: null}]
          }
        />
      </div>
      <div>
        <label htmlFor="musiciansIds">Musicians*</label>
        <Select 
          className="w-72 mt-2 mb-4"
          {...register("musiciansIds")}
          isMulti
          placeholder="choose one or more musicians"
          onChange={e => console.log(e)}
          // @ts-ignore
          options={
            typeof musicians !== "undefined"
            ? musicians.map(musician =>  ({ label: musician.name, value: musician.id }))
            : [{ label: 'choose a writer', value: null}]
          }
        />
      </div>
      <div className="flex justify-center">
        <input className="md:absolute md:bottom-12 my-4 md:m-0 md:right-12 w-48 p-4 border border-sky-600 hover:cursor-pointer bg-sky-200/20 hover:bg-sky-600 hover:text-white rounded-2xl" type="submit" value="Create movie"/>
      </div>
      <button 
        className="md:absolute md:bottom-12 sm:left-12 mx-auto w-48 p-4 border border-red-700 hover:cursor-pointer bg-red-200/20 hover:bg-red-700 hover:text-white rounded-2xl"
        onClick={() => {setFormStep("Data")}}
      >
        Previous
      </button>
    </div>
  </div>
  );
};
