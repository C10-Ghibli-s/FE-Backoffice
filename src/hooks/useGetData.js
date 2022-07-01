import { useEffect, useState } from 'react';
import { GET_ITEM } from '@services/queries/getData/getItem';
import axios from 'axios'

const useGetData = (titleModule) => {
    // Getting data from API and setting it to state 
    const [moduleData, setModuleData] = useState();
    useEffect(() => {
        setTimeout(() => {
          axios.post(
            process.env.API_URL !== undefined ? process.env.API_URL : '',
            // @ts-ignore
            GET_ITEM(titleModule),
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          )
          .then((response) => {
            if(response.data.data?.showAllUsers) setModuleData(response.data.data.showAllUsers)
            if(response.data.data?.showAllMovies) setModuleData(response.data.data.showAllMovies)
            if(response.data.data?.showAllWriters) setModuleData(response.data.data.showAllWriters)
            if(response.data.data?.showAllDirectors) setModuleData(response.data.data.showAllDirectors)
            if(response.data.data?.showAllMusicians) setModuleData(response.data.data.showAllMusicians)
            console.log('response: ', response.data.data.showAllUsers);
          }
          )
          .catch((error) => {
            console.log(error);
          })
          console.log('ModuleData: ', moduleData, "QUERY : ", titleModule);
        }, 1000);
    
    }, []);
    return { moduleData };
}

export { useGetData };