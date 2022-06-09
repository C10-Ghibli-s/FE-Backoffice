
export const SHOW_ALL_WRITERS = {
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

