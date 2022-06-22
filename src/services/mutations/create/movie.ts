import { newMovieForMutation } from "@customTypes/createItemTypes";

export const CREATE_MOVIE = (data: newMovieForMutation) => {
  let CREATE_MOVIE_QUERY =
  {
    query: `mutation CreateAMovie($data: MovieInput!) {
      createAMovie(data: $data) {
        id
        status
        title {
          title
        }
      }
    }`,
    variables: {
      "data": {
        "title": `${data.data.title}`,
        "originalTitle": `${data.data.originalTitle}`,
        "releaseDate": `${data.data.releaseDate}`,
        "filmDescription": `${data.data.filmDescription}`,
        "movieBanner": `${data.data.movieBanner}`,
        "duration": `${data.data.duration}`,
        "userName": `${data.data.userName}`,
        "romajiTitle": `${data.data.romajiTitle}`
      }
    }
  };
  return CREATE_MOVIE_QUERY
}
