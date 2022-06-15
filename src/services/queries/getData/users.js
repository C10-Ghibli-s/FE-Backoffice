
export const SHOW_ALL_USERS = {
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
