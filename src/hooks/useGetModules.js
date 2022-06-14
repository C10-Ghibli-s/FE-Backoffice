import { getDirectors, getPublic1, getPublic2 } from '../services/getData';
import { useEffect } from 'react';

const objectPromises= {public1: getPublic1, public2: getPublic2}

const useGetModules = (key) =>{
    useEffect(()=>{
        const promise = objectPromises[key]
        promise()
        .then((response)=>{
            console.log(response)
        });
    }, []);
};

export {useGetModules};
