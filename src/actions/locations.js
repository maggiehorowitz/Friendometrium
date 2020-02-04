import { ADD_PLACES, DELETE_PLACE } from './actionTypes';
export const addPlaces = (placeName, location) => {
  return {
    type: ADD_PLACES,
    placeName: placeName,
    location: location
  };
};
export const deletePlaces = (key) => {
  return {
    type: DELETE_PLACE,
    key: key
  };
};
