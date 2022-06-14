import { newMovieType } from "@customTypes/createItemTypes";

export const CREATE_MOVIE = (data: newMovieType) => {
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
        "title": `${data.title}`,
        "originalTitle": `${data.originalTitle}`,
        "releaseDate": `${data.releaseDate}`,
        "filmDescription": `${data.filmDescription}`,
        "movieBanner": `${data.movieBanner}`,
        "duration": `${data.duration}`,
        "userName": `${data.userName}`,
        "romajiTitle": `${data.romajiTitle}`
      }
    }
  };
  return CREATE_MOVIE_QUERY
}
