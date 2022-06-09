
export const SHOW_ALL_DIRECTORS = {
  query: `query ShowAllDirectors {
    showAllDirectors {
      id
      name
      movies {
        title {
          title
        }
      }
    }
  }`
}

