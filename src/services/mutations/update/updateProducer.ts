import { newProducerType } from '@customTypes/createItemTypes';


export const UPDATE_PRODUCER = (data: newProducerType) => {
	let UPDATE_PRODUCER_QUERY;
	switch (data.producerRole) {
		case 'musician':
			UPDATE_PRODUCER_QUERY = {
				query: `mutation UpdateMusician($updateMusicianId: ID!, $data: MusicianEditInput!) {
					updateMusician(id: $updateMusicianId, data: $data) {
						id
						name
					}
				}`,	
				variables: {
					"updateMusicianId": data.id,
					"data": {
						"name": data.name,
					}
				}
			};
			break;
		case 'director':
			UPDATE_PRODUCER_QUERY = {
				query: `mutation UpdateDirector($updateDirectorId: ID!, $data: DirecotrEditInput!) {
					updateDirector(id: $updateDirectorId, data: $data) {
					  id
					  name
					}
				}`,
				variables: {
					"updateDirectorId": data.id,
					"data": {
						"name": data.name,
					}
				}
			};
			break;
		case 'writer':
			UPDATE_PRODUCER_QUERY = {
				query: `mutation UpdateWriter($updateWriterId: ID!, $data: WriterEditInput!) {
					updateWriter(id: $updateWriterId, data: $data) {
						id
						name
					}
				}`,
				variables: {
					"updateWriterId": data.id,
					"data": {
						"name": data.name,
					}
				}
			};
			break;
		default:
			break;
	}
	return UPDATE_PRODUCER_QUERY;
}

