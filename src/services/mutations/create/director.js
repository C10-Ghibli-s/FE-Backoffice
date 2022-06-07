
export const createDirector = {
  query: `mutation CreateDirector($data: DirectorInput!) {
    createDirector(data: $data) {
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