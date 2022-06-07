
export const ShowAllWriters = {
  query: `query ShowAllWriters {
    showAllWriters {
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

