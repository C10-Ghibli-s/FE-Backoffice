import { newProducerType } from "@customTypes/createItemTypes";

export const CREATE_DIRECTOR = (data: newProducerType) => {
  let CREATE_DIRECTOR_QUERY = 
  {
    query: `mutation CreateDirector($data: DirectorInput!) {
      createDirector(data: $data) {
        id
        name
      }
    }`,
    variables: {
      "data": {
        "name": data.name,
        "status": "ACTIVE"
      }
    }
  };
  return CREATE_DIRECTOR_QUERY
}
