import React from "react"
import {
    updateUserForQuery,
    updateProducerType,
    updateMovieTypeFromDB
} from '@customTypes/createItemTypes';


export type modalTypes = {
    item: string | null,
    data: {
        movieData?: updateMovieTypeFromDB,
        producerData?: updateProducerType,
        userData?: updateUserForQuery,
    };
}

