import { CreateMovieForm } from '@components/createMovieForm';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';


const Create: NextPage = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <header className='w-full bg-sky-500'>a</header>
      <CreateMovieForm/>
    </React.Fragment>
  );
};

export default Create;
