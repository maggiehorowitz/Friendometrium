
import { ADD_NEW_POST, CLICKED_POST, REMOVE_POST, FETCH_POSTS, CLEAR , ADD_PLACES, DELETE_PLACE, FETCH_PLACES} from './actionTypes';
import FireForumData from '../../config/Firebase/FireForumData';
import FirePlaceData from '../../config/Firebase/FirePlaceData';
import * as firebase from 'firebase';
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

export const clearPosts = () => ({
    type: CLEAR,
})

export const fetchPosts = (postData) => {
    return {
        type: FETCH_POSTS,
        value: postData,
    }

}

export const watchNewPosts = ()=> {
    return function(dispatch) {
        firebase.database().ref('ForumPosts/').on('child_added', function(data) {
            var postData = data.val();
            dispatch(fetchPosts(postData))
        }, function(error) {

        })
    }
}
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
