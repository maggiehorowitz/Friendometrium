import { ADD_NEW_POST, CLICKED_POST, REMOVE_POST } from './actionTypes';
let nextId = 0

export const addNewPost = (title,body) =>({
    type: ADD_NEW_POST,
    id: nextId++,
    title,
    body,

})

export const ClickedPost = (id) => ({
    type: CLICKED_POST,
    id
})

export const removePost = (id) => ({
    type: REMOVE_POST,
    id
})


