import { CreateMovieForm } from '@components/createMovieForm';
import { CreateUserForm } from '@components/CreateUserForm';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';


const Create: NextPage = () => {
  const router = useRouter();
  const creationModule = router.query.module;
  return (
    <React.Fragment>
      <header className='w-full bg-sky-500'>a</header>
      {creationModule == "movie" && <CreateMovieForm/>}
      {creationModule == "user" && <CreateUserForm/>}
    </React.Fragment>
  );
};

export default Create;
