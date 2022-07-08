
export const DELETE_ITEM = ({itemToDelete, id}: {itemToDelete: string|null, id: number}) => {
    let DELETE_ITEM_QUERY;
    switch (itemToDelete) {
        case 'Movie':
            DELETE_ITEM_QUERY = {
                query: `mutation DeleteAMovie($deleteAMovieId: ID!) {
                    deleteAMovie(id: $deleteAMovieId) {
                    }
                }`,
                variables: {
                    "deleteAMovieId": `${id}`,
                }
            };
            break;
        case 'User':
            DELETE_ITEM_QUERY = {
                query: `mutation DeleteAnUser($deleteAnUserId: ID!) {
                    deleteAnUser(id: $deleteAnUserId)
                }`,
                variables: {
                    "deleteAnUserId": `${id}`,
                }
                    
            }
            break;
        case 'Musician':
            DELETE_ITEM_QUERY = {
                query: `mutation DeleteMusician($deleteMusicianId: ID!) {
                    deleteMusician(id: $deleteMusicianId)
                  }`,
                variables: {
                    "deleteMusicianId": `${id}`,
                }
            };
            break;
        case 'Director':
            DELETE_ITEM_QUERY = {
                query: `mutation DeleteDierctor($deleteDierctorId: ID!) {
                    deleteDierctor(id: $deleteDierctorId)
                  }`,
                variables: {
                    "deleteDierctorId": `${id}`,
                }
            };
            break;
        case 'Writer':
            DELETE_ITEM_QUERY = {
                query: `mutation DeleteWriter($deleteWriterId: ID!) {
                    deleteWriter(id: $deleteWriterId)
                  }`,
                variables: {
                    "deleteWriterId": `${id}`,
                }
            };
            break;
        default:
            break;
    }
    return DELETE_ITEM_QUERY;
}
