import { CreateMovieForm } from '@components/CreateMovieForm';
import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';


const Create: NextPage = () => {
  const router = useRouter();
  const { title } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(
        "http://localhost:3000/graphql",
        {
          query: `query ShowAllUsers {
            showAllUsers {
              id
              nickname
              status
            }
          }`
        }
      )
      console.log(queryResult.data.data)
    }
    fetchData()
  })
  return (
    <React.Fragment>
      <main className='bg-slate-200/40'>
        <CreateMovieForm/>
      </main>
    </React.Fragment>
  );
};

export default Create;
