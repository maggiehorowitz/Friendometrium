import { ADD_NEW_POST, CLICKED_POST } from './actionTypes';
let nextId = 0

export const addNewPost = (text) =>({
    type: ADD_NEW_POST,
    id: nextId++,
    text,
})

export const ClickedPost = (id) => ({
    type: CLICKED_POST,
    id
})

export { addPlaces, deletePlaces } from './locations';
