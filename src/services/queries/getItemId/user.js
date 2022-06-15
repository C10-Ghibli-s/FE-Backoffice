
export const getUser = typeof data == undefined ? {
  query: `query GetAnUser($getAnUserId: ID!) {
    getAnUser(id: $getAnUserId) {
      id
      status
      nickname
      profilePicture
      role {
        name
      }
    }
  }`,
  variables: { "getAnUserId": `${data.userId}` }
}
: '';
