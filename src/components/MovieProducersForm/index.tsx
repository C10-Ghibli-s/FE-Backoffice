import { newDirectorType, newMusicianType, newWriterType } from '@customTypes/createItemTypes';
import React, { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from 'react-select';

export const MovieProducersForm: FC = () => {
  const methods = useFormContext();
  const { register, formState: {errors} } = methods;

  const [directors, setDirectors] = useState<newDirectorType[]>([]);
  const [writers, setWriters] = useState<newWriterType[]>([]);
  const [musicians, setMusicians] = useState<newMusicianType[]>([]); 

  useEffect(() => {
  }, [])

  return(
    <React.Fragment>
    <div className="p-8 mt-24">
      <div>
        <label htmlFor="directorsIds">Directors*</label>
        <Select 
          className="max-w-xl mt-2 mb-4"
          isMulti
          placeholder="choose one or more directors"
          //@ts-ignore
          onChange={e => document.getElementById('directorsIds').value = e}
          // @ts-ignore
          options={directors.map(director =>  ({ label: director.name, value: director.id }))}
        />
        <input type="text" className='hidden' id='directorsIds' {...register('directorsIds')}/>
      </div>
      <div>
        <label htmlFor="writersIds">Writers*</label>
        <Select 
          className="max-w-xl mt-2 mb-4"
          {...register("writersIds")}
          isMulti
          placeholder="choose one or more writers"
          onChange={e => console.log(e)}
          // @ts-ignore
          options={writers.map(writer =>  ({ label: writer.name, value: writer.id }))}
        />
      </div>
      <div>
        <label htmlFor="musiciansIds">Musicians*</label>
        <Select 
          className="max-w-xl mt-2 mb-4"
          {...register("musiciansIds")}
          isMulti
          placeholder="choose one or more musicians"
          onChange={e => console.log(e)}
          // @ts-ignore
          options={musicians.map(musician =>  ({ label: musician.name, value: musician.id }))}
        />
      </div>
      <div className="flex justify-center">
        <input className="absolute bottom-12 right-12 w-48 p-4 border border-sky-600 hover:cursor-pointer bg-sky-200/20 hover:bg-sky-600 hover:text-white rounded-2xl" type="submit" value="Create movie"/>
      </div>
    </div>
  </React.Fragment>
  );
};
