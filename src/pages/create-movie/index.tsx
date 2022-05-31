import { CreateMovieForm } from '@components/CreateMovieForm';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';


const Create: NextPage = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <React.Fragment>
      <main className='bg-slate-200/40'>
        <CreateMovieForm/>
      </main>
    </React.Fragment>
  );
};

export default Create;
