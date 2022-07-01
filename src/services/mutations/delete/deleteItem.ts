
export const DELETE_ITEM = ({itemToDelete, id}: {itemToDelete: string|null, id: number}) => {
    let DELETE_ITEM_QUERY;
    switch (itemToDelete) {
        case 'movie':
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
        case 'user':
            DELETE_ITEM_QUERY = {
                query: `mutation DeleteAnUser($deleteAnUserId: ID!) {
                    deleteAnUser(id: $deleteAnUserId)
                }`,
                variables: {
                    "deleteAnUserId": `${id}`,
                }
                    
            }
            break;
        case 'musician':
            DELETE_ITEM_QUERY = {
                query: `mutation DeleteMusician($deleteMusicianId: ID!) {
                    deleteMusician(id: $deleteMusicianId) {
                        id
                        name
                    }
                }`,
                variables: {
                    "deleteMusicianId": `${id}`,
                }
            };
            break;
        case 'director':
            DELETE_ITEM_QUERY = {
                query: `mutation DeleteDierctor($deleteDierctorId: ID!) {
                    deleteDierctor(id: $deleteDierctorId) {
                        id
                        name
                    }
                }`,
                variables: {
                    "deleteDierctorId": `${id}`,
                }
            };
            break;
        case 'writer':
            DELETE_ITEM_QUERY = {
                query: `mutation DeleteWriter($deleteWriterId: ID!) {
                    deleteWriter(id: $deleteWriterId) {
                        id
                        name
                    }
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
