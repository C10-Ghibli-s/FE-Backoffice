import { getPublic1, getPublic2 } from '../services/queries/getData/modules';
import { useEffect } from 'react';

// When we have the api deployed this should be updated to use real data
// or even use services/queries/getData/ and then each of the modules
const objectPromises= {public1: getPublic1, public2: getPublic2}

// useGetModules = (key, {setItems})
const useGetModules = (key) =>{
    useEffect(()=>{
        const promise = objectPromises[key]
        promise()
        .then((response)=>{
            console.log(response)
            //setItems(response)
            return response
        });
    }, []);
};

export {useGetModules};

