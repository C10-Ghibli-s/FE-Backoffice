import axios from "axios";

// It should contain each module call of graphql
export const getPublic1 = axios.get('https://jsonplaceholder.typicode.com/posts')
export const getPublic2 = axios.get('https://ghibliapi.herokuapp.com/films')