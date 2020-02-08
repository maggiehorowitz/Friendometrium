import { ADD_PLACES, DELETE_PLACE, FETCH_PLACES } from '../actions/actionTypes';
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
      })

    };
    case DELETE_PLACE:
    return {
      ...state,
      locations: state.locations.filter(location => {
        return location.key !== action.key;
      })
    };

    case FETCH_PLACES:
            return [...state, {
                placeName: action.value.placeName,
                location: action.value.location,
                description: action.value.description,
                key: action.value.key
            }
        ]

    default:
      return state;
  }
};
export default locationsReducer;
