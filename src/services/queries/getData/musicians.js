
export const ShowAllMusicians = {
  query: `query ShowAllWriters {
    showAllMusicians {
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

