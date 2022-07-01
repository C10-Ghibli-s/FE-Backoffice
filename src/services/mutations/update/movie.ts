import { newMovieType } from '@customTypes/createItemTypes';

export const UPDATE_MOVIE = (data: newMovieType) => {
    let UPDATE_MOVIE_QUERY = {
      query: `mutation UpdateAMovie($updateAMovieId: ID!, $data: MovieEditInput!) {
        updateAMovie(id: $updateAMovieId, data: $data) {
          title {
            title
          }
          status
        }
      }`,
      variables: {
        "updateAMovieId": `${data.id}`,
        "data": {
          "filmDescription": data.filmDescription,
          "movieBanner": data.movieBanner,
          "audienceScore": data.audienceScore,
          "releaseDate": data.releaseDate,
          "userName": data.userName,
          "linkWiki": data.linkWiki,
          "youtube": data.youtube,
          "duration": data.duration,
          "status": data.status,
        }
      }}
    return UPDATE_MOVIE_QUERY;
}

