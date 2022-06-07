
export const createMusician = {
  query: `mutation CreateMusician($data: MusicianInput!) {
    createMusician(data: $data) {
      id
      name
    }
  }`,
  variables: {
    "data": {
      "name": `${data.name}`
    }
  }
}
