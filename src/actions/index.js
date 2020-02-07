import { ADD_NEW_POST, CLICKED_POST, ADD_PLACES, DELETE_PLACE  } from './actionTypes';


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

export const addPlaces = (placeName, location, description) => {
  return {
    type: ADD_PLACES,
    placeName: placeName,
    location: location,
    description: description
  };
};
export const deletePlaces = (key) => {
  return {
    type: DELETE_PLACE,
    key: key
  };
};
