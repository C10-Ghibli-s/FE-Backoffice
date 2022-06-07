
export const getMusician = {
  query: `query GetAMusician($getAMusicianId: ID!) {
    getAMusician(id: $getAMusicianId) {
      id
      name
      movies {
        title {
          title
        }
      }
    }
  }`,
  variables: { "getAMusicianId": `${data.musicianId}` }
}

