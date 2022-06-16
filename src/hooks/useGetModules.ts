import React, { SetStateAction } from 'react';
import { getPublic1, getPublic2 } from '../services/queries/getData/modules';
import { getModules } from "@customTypes/createItemTypes";
import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';

// When we have the api deployed this should be updated to use real data
// or even use services/queries/getData/ and then each of the modules

type setData ={
    key: string,
    setItems: React.Dispatch<SetStateAction<getModules[]>>
  }

// useGetModules = (key, {setItems})
const useGetModules = ({key, setItems}: setData) =>{
        const objectPromises= {public1: getPublic1, public2: getPublic2}

        const promise = objectPromises[key]
        promise
        .then((response)=>{
            console.log(response)
            setItems(response.data)
            return response
        });
};

export {useGetModules};

