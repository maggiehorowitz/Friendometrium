import { ADD_PLACES, DELETE_PLACE } from '../actions/actionTypes';
const initialState = {
  locations: []
};
const locationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACES:
    return {
      ...state,
      locations: state.locations.concat({
        placeName: action.placeName,
        location: action.location,
        description: action.description,
        key: Math.random()
      })
    };
    case DELETE_PLACE:
    return {
      ...state,
      locations: state.locations.filter(location => {
        return location.key !== action.key;
      })
    };
    default:
      return state;
  }
};
export default locationsReducer;
