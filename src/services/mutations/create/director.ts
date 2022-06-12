import { newDirectorType } from "@customTypes/createItemTypes";

export const CREATE_DIRECTOR = (data: newDirectorType) => {
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
        "name": data.name
      }
    }
  };
  return CREATE_DIRECTOR_QUERY
}
