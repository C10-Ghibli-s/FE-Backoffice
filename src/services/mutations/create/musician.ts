import { newMusicianType } from "@customTypes/createItemTypes";

export const CREATE_MUSICIAN = (data: newMusicianType) => {
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
        "name": `${data.name}`
      }
    }
  };
  return CREATE_MUSICIAN_QUERY
}

