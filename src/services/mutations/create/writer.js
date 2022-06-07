
export const createWriter = {
  query: `mutation CreateWriter($data: WriterInput!) {
    createWriter(data: $data) {
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