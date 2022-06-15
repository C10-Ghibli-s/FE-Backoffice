import { newWriterType } from '@customTypes/createItemTypes';

export const CREATE_WRITER = (data: newWriterType) => {
  let CREATE_WRITER_QUERY =
  {
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
  };
  return CREATE_WRITER_QUERY
}

