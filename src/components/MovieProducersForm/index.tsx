import { newProducerType } from '@customTypes/createItemTypes';
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

  const [directors, setDirectors] = useState<newProducerType[]>([]);
  const [writers, setWriters] = useState<newProducerType[]>([]);
  const [musicians, setMusicians] = useState<newProducerType[]>([]); 

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
          onChange={e => {
            //@ts-ignore  // that field is always going to be there
            document.getElementById('directorsIds').value = e.map(director => director.value).toString();
            //@ts-ignore  // mobile users can cancel scroll animation with touch
            e.cancelable = true;
          }}
          // @ts-ignore // the array of directors will always come from a request
          options={
            typeof directors !== "undefined"
            ? directors.map(director =>  ({ label: director.name, value: director.id }))
            : [{ label: 'choose a director', value: null}]
          }
        />
        {errors.directorsIds && errors.directorsIds?.message && <span className='text-xs text-red-500'>{errors.directorsIds.message}</span>}
        <input type="text" className='hidden' id='directorsIds' {...register('directorsIds')}/>
      </div>
      <div>
        <label htmlFor="writersIds">Writers*</label>
        <Select 
          className="w-72 mt-2 mb-4"
          {...register("writersIds")}
          isMulti
          placeholder="choose one or more writers"
          onChange={e => {
            //@ts-ignore  // that field is always going to be there
            document.getElementById('writersIds').value = e.map(writer => writer.value).toString();
            //@ts-ignore  // mobile users can cancel scroll animation with touch
            e.cancelable = true;
          }}
          // @ts-ignore
          options={
            typeof writers !== "undefined"
            ? writers.map(writer =>  ({ label: writer.name, value: writer.id }))
            : [{ label: 'choose a writer', value: null}]
          }
        />
        {errors.writersIds && errors.writersIds?.message && <span className='text-xs text-red-500'>{errors.writersIds.message}</span>}
        <input type="text" className='hidden' id='writersIds' {...register('writersIds')}/>
      </div>
      <div>
        <label htmlFor="musiciansIds">Musicians*</label>
        <Select 
          className="w-72 mt-2 mb-4"
          {...register("musiciansIds")}
          isMulti
          placeholder="choose one or more musicians"
          onChange={e => {
            //@ts-ignore  // that field is always going to be there
            document.getElementById('musiciansIds').value = e.map(musician => musician.value).toString();
            //@ts-ignore  // mobile users can cancel scroll animation with touch
            e.cancelable = true;
          }}

          // @ts-ignore
          options={
            typeof musicians !== "undefined"
            ? musicians.map(musician =>  ({ label: musician.name, value: musician.id }))
            : [{ label: 'choose a writer', value: null}]
          }
        />
        {errors.musiciansIds && errors.musiciansIds?.message && <span className='text-xs text-red-500'>{errors.musiciansIds.message}</span>}
        <input type="text" className='hidden' id='musiciansIds' {...register('musiciansIds')}/>
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
