import { newMovieType } from "@customTypes/createItemTypes";

export const CREATE_MOVIE = (movie: newMovieType) => {
  let variablesData: any[] = [];

  let movieObject = Object.entries(movie)

  // mapping every property
  for (let i = 0; i < movieObject.length; i++) {
    // verify if the property is not empty
    if (movieObject[i][1] !== '') {
      // if it is not empty, we add it to the variables query depending on what type of property it is
      switch (movieObject[i][0]) {
        case 'youtube':
          variablesData.push(['youtube', movie.youtube]);
          break;
        case 'userName':
          variablesData.push(['userName', movie.userName]);
          break;
        case 'title':
          variablesData.push(['title', movie.title]);
          break;
        case 'originalTitle':
          variablesData.push(['originalTitle', movie.originalTitle]);
          break;
        case 'romajiTitle':
          variablesData.push(['romajiTitle', movie.romajiTitle]);
          break;
        case 'releaseDate':
          variablesData.push(['releaseDate', movie.releaseDate]);
          break;
        case 'filmDescription':
          variablesData.push(['filmDescription', movie.filmDescription]);
          break;
        case 'duration':
          variablesData.push(['duration', movie.duration]);
          break;
        case 'audienceScore':
          variablesData.push(['audienceScore', movie.audienceScore]);
          break;
        case 'linkWiki':
          variablesData.push(['linkWiki', movie.linkWiki]);
          break;
        case 'movieBanner':
          variablesData.push(['movieBanner', movie.movieBanner]);
          break;
      }
    }
  }
  const data = Object.fromEntries(variablesData);


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
        ...data,
        "status": "ACTIVE",
        "youtube": "https://www.youtube.com/",
      }
    }
  };
  return CREATE_MOVIE_QUERY
}
