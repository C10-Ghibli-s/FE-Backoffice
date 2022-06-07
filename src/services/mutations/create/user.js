
export const createUser = {
  query: `mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      status
      nickname
      id
    }
  }`,
  variables: {
    "data": {
      "status": "ACTIVE",
      "nickname": `${data.nickname}`,
      "password": `${data.password}`,
      "name": `${data.role}`
    }
  }
};
