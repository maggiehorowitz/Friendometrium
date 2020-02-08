import { ADD_NEW_POST, CLICKED_POST, ADD_PLACES, DELETE_PLACE, FETCH_PLACES  } from './actionTypes';
import FirePlaceData from '../../config/Firebase/FirePlaceData';
import * as firebase from 'firebase';
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

export const addPlaces = (placeName, location, description, key) => {
  return {
    type: ADD_PLACES,
    placeName: placeName,
    location: location,
    description: description,
    key: key
  };

};
export const deletePlaces = (key) => {
  return {
    type: DELETE_PLACE,
    key: key
  };
};


export const fetchPlaces = (placeData) => {
    return {
        type: FETCH_PLACES,
        value: placeData
    }

}
