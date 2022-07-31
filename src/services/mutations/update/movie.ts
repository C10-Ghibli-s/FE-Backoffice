import { updateMovieType } from '@customTypes/createItemTypes';

export const UPDATE_MOVIE = (movie: updateMovieType) => {
  let variablesData: any[] = [];
  let movieObject = Object.entries(movie);

  // mapping every property
  for (let i = 0; i < movieObject.length; i++) {
    // verify if the property is not empty
    if (movieObject[i][1] !== '') {
      // if it is not empty, we add it to the variables query depending on what type of property it is
      switch (movieObject[i][0]) {
        case 'filmDescription':
          variablesData.push(['filmDescription', movie.filmDescription]);
          break;
        case 'releaseDate':
          variablesData.push(['releaseDate', movie.releaseDate]);
          break;
        case 'movieBanner':
          variablesData.push(['movieBanner', movie.movieBanner]);
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
        case 'youtube':
          variablesData.push(['youtube', movie.youtube]);
          break;
        case 'status':
          variablesData.push(['status', movie.status]);
          break;
      }
    }
  }
  const data = Object.fromEntries(variablesData);


  let UPDATE_MOVIE_QUERY = {
    query: `mutation UpdateAMovie($updateAMovieId: ID!, $data: MovieEditInput!) {
      updateAMovie(id: $updateAMovieId, data: $data) {
        id
      }
    }`,
    variables: {
      "updateAMovieId": movie.id,
      "data": {...data}
    }}
  return UPDATE_MOVIE_QUERY;
}

