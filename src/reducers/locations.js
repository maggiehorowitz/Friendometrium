import { ADD_PLACES, DELETE_PLACE, FETCH_PLACES } from '../actions/actionTypes';

const locations = (state = [], action) => {
  switch(action.type) {
    // case ADD_PLACES:
    // return {
    //   ...state,
    //   locations: state.locations.concat({
    //     placeName: action.placeName,
    //     location: action.location,
    //     description: action.description,
    //     key: action.key
    //   })
    //
    // };
    case DELETE_PLACE:
    return state.filter(Location => Location.key !== action.key)


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
export default locations;
