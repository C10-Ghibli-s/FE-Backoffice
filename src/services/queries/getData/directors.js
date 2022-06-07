
export const ShowAllDirectors = {
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

