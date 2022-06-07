
export const getMovie = {
  query: `query GetAMovie($getAMovieId: ID!) {
    getAMovie(id: $getAMovieId) {
      id
      title {
        title
        originalTitle
        romajiTitle
      }
      releaseDate
      filmDescription
      movieBanner
      audienceScore
      linkWiki
      duration
      directors {
        id
        name
      }
      musicians {
        id
        name
      }
      writers {
        id
        name
      }
      userName
      status
    }
  }`,
  variables: { "getAMovieId": `${data.movieId}` }
}


