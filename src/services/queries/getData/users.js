
export const ShowAllUsers = {
  query: `query ShowAllUsers {
    showAllUsers {
      id
      status
      nickname
      profilePicture
      role {
        name
      }
    }
  }`
}
