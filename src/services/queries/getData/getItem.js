import { SHOW_ALL_MOVIES } from './movies';
import { SHOW_ALL_USERS } from './users';
import { SHOW_ALL_DIRECTORS } from './directors';
import { SHOW_ALL_MUSICIANS } from './musicians';
import { SHOW_ALL_WRITERS } from './writers';

export const GET_ITEM = (item) => {
    let GET_ITEM_QUERY;
    switch (item) {
        case 'Movies':
            GET_ITEM_QUERY = SHOW_ALL_MOVIES;
            break;
        case 'Users':
            GET_ITEM_QUERY = SHOW_ALL_USERS;
            break;
        case 'Directors':
            GET_ITEM_QUERY = SHOW_ALL_DIRECTORS;
            break;
        case 'Musicians':
            GET_ITEM_QUERY = SHOW_ALL_MUSICIANS;
            break;
        case 'Writers':
            GET_ITEM_QUERY = SHOW_ALL_WRITERS;
            break;
        default:
            GET_ITEM_QUERY = SHOW_ALL_MOVIES;
            break;
    }
    return GET_ITEM_QUERY;
}