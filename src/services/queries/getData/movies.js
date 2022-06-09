
export const SHOW_ALL_MOVIES = {
  query: `query ShowAllMovies {
    showAllMovies {
      id
      title {
        title
        originalTitle
        romajiTitle
      }
      releaseDate
      filmDescription
      duration
      linkWiki
      audienceScore
      movieBanner
      userName
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
    }
  }`
}

