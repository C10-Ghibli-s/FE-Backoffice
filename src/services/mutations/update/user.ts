import { updateUserForQuery } from "@customTypes/createItemTypes";

export const UPDATE_USER = (user: updateUserForQuery) => {

  let variablesData: any[] = [];
  let userObject = Object.entries(user);

  // mapping every property 
  for (let i = 0; i < userObject.length; i++) {
    // verify if the property is not empty 
    if(userObject[i][1] !== '') {
      // if it is not empty, we add it to the variables query depending on what type of property it is
      switch (userObject[i][0]) {
        case 'nickname':
          variablesData.push(['nickname', user.nickname]);
          break;
        case 'status':
          variablesData.push(['status', user.status]);
          break;
        case 'role':
          userObject[i][1] == 'USER'
            ? variablesData.push(['roleId', 1])
            : variablesData.push(['roleId', 2]);
          break;
      }
    }
  }
  const data = Object.fromEntries(variablesData);
  let UPDATE_USER_QUERY = {
      query: `mutation UpdateUser($updateUserId: ID!, $data: UserEditInput!) {
          updateUser(id: $updateUserId, data: $data) {
            id
            nickname
            status
          }
        }`,
      variables: {
          "updateUserId": user.id,
          "data": data
      }
  };
  return UPDATE_USER_QUERY;
}
