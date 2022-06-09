
export const SHOW_ALL_MUSICIAN = {
  query: `query ShowAllMusicians {
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

