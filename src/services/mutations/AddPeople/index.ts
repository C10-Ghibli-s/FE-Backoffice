import { addPeopleForMutation } from "@customTypes/createItemTypes";


export const ADD_PEOPLE = (people: addPeopleForMutation) => {
    let variablesData: any[] = [];

    let peopleObject = Object.entries(people)

    // mapping every property
    for (let i = 0; i < peopleObject.length; i++) {
        // verify if the property is not empty
        if (peopleObject[i][1] !== [NaN]) {
            // if it is not empty, we add it to the variables query depending on what type of property it is
            switch (peopleObject[i][0]) {
            case 'directorsIds':
                variablesData.push(['"directorsId"', people.directorsIds]);
                break;
            case 'writersIds':
                variablesData.push(['"writersId"', people.writersIds]);
                break;
            case 'musiciansIds':
                variablesData.push(['"musiciansId"', people.musiciansIds]);
                break;
            default:
                break;
            }
        }
        }
    const data = Object.fromEntries(variablesData);

    let ADD_PEOPLE_QUERY =
    {
        query: `mutation AddPeople($movieId: ID!, $data: ArrayIdsInput!) {
            addPeople(movieId: $movieId, data: $data) {
              id
            }
        }`,
        variables: {
            "movieId": people.movieId,
            "data": {...data}
        }
    }
    return ADD_PEOPLE_QUERY;
}

