
export const getWriter = typeof data == undefined ? {
  query: `query GetAWriter($getAWriterId: ID!) {
    getAWriter(id: $getAWriterId) {
      id
      name
      movies {
        title {
          title
        }
      }
    }
  }`,
  variables: { "getAWriterId": `${data.writerId}` }
}
: '';
