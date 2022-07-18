import { updateMovieType } from '@customTypes/createItemTypes';

export const UPDATE_MOVIE = (data: updateMovieType) => {
    let UPDATE_MOVIE_QUERY = {
      query: `mutation AddPeople($movieId: ID!, $data: ArrayIdsInput!) {
        addPeople(movieId: $movieId, data: $data) {
          title {
            title
          }
          id
        }
      }`,
      variables: {
        "updateAMovieId": `${data.id}`,
      }}
    return UPDATE_MOVIE_QUERY;
}

