import { newUserType } from "@customTypes/createItemTypes"

export const CREATE_USER = (data: newUserType) => {
  let CREATE_USER_QUERY = 
  { 
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
        "nickname": data.nickname,
        "password": data.password,
        "roleId": parseInt(data.role),
        "email": data.email
      }
    } 
  };
  return CREATE_USER_QUERY
}
