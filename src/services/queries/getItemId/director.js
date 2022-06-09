
export const getDirector = typeof data == undefined ? {
  query: `query GetADirector($getADirectorId: ID!) {
    getADirector(id: $getADirectorId) {
      id
      name
      movies {
        title {
          title
        }
      }
    }
  }`,
  variables: { "getADirectorId": `${data.directorId}` }
}
: '';
