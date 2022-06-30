import { updateUserForQuery } from "@customTypes/createItemTypes";

export const UPDATE_USER = (user: updateUserForQuery) => {

    let UPDATE_USER_QUERY = {
        query: `mutation UpdateUser($updateUserId: ID!, $data: UserEditInput!) {
            updateUser(id: $updateUserId, data: $data) {
              id
              nickname
              status
              role {
                name
              }
            }
          }`,
        variables: {
            "updateUserId": `${user.id}`,
            "data": {
                "nickname": `${user.nickname}`,
                "status": `${user.status}`,
                "roleId": `${user.role}`,
            }
        }
    };
    return UPDATE_USER_QUERY;
}
