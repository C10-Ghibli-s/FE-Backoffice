import { newProducerType } from "@customTypes/createItemTypes";

export const CREATE_MUSICIAN = (data: newProducerType) => {
  let CREATE_MUSICIAN_QUERY =
  {
    query: `mutation CreateMusician($data: MusicianInput!) {
      createMusician(data: $data) {
        id
        name
      }
    }`,
    variables: {
      "data": {
        "name": `${data.name}`,
        "status": "ACTIVE"
      }
    }
  };
  return CREATE_MUSICIAN_QUERY
}

