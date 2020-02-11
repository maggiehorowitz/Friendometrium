import { ADD_NEW_POST, CLICKED_POST, DELETE_PLACE, FETCH_PLACES  } from './actionTypes';
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

// export const addPlaces = (placeName, location, description, key) => {
//   return {
//     type: ADD_PLACES,
//     placeName: placeName,
//     location: location,
//     description: description,
//     key: key
//   };
// };
export const deletePlaces = (key) => ({
    type: DELETE_PLACE,
    key
})


export const fetchPlaces = (placeData) => {
    return {
        type: FETCH_PLACES,
        value: placeData
    }

}

export const watchNewPlaces = ()=> {
    return function(dispatch) {
        firebase.database().ref('Places').on('child_added', function(data) {
            var placeData = data.val();
            dispatch(fetchPlaces(placeData))
        }, function(error) {

        })
    }
}
