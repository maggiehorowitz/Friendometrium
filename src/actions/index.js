import { REMOVE_FF_POST, FETCH_FF_POSTS, CLEAR_FF, 
    FETCH_WP_POSTS, CLEAR_WP, REMOVE_WP_POST,
    FETCH_PR_POSTS, CLEAR_PR, REMOVE_PR_POST, } from './actionTypes';

import * as firebase from 'firebase';


export const removeFFPost = (id) => ({
    type: REMOVE_FF_POST,
    id
})

export const clearFFPosts = () => ({
    type: CLEAR_FF,
})

export const fetchFFPosts = (postData) => {
    return {
        type: FETCH_FF_POSTS,
        value: postData,
    }

}

export const watchNewFFPosts = ()=> {
    return function(dispatch) {
        firebase.database().ref('ForumPosts/FunFactsPosts/').on('child_added', function(data) {
            var postData = data.val();
            dispatch(fetchFFPosts(postData))
        }, function(error) {

        })
    }
}

export const removeWPPost = (id) => ({
    type: REMOVE_WP_POST,
    id
})

export const clearWPPosts = () => ({
    type: CLEAR_WP,
})

export const fetchWPPosts = (postData) => {
    return {
        type: FETCH_WP_POSTS,
        value: postData,
    }

}

export const watchNewWPPosts = ()=> {
    return function(dispatch) {
        firebase.database().ref('ForumPosts/WorkPlacePosts/').on('child_added', function(data) {
            var postData = data.val();
            dispatch(fetchWPPosts(postData))
        }, function(error) {

        })
    }
}


export const removePRPost = (id) => ({
    type: REMOVE_PR_POST,
    id
})

export const clearPRPosts = () => ({
    type: CLEAR_PR,
})

export const fetchPRPosts = (postData) => {
    return {
        type: FETCH_PR_POSTS,
        value: postData,
    }

}

export const watchNewPRPosts = ()=> {
    return function(dispatch) {
        firebase.database().ref('ForumPosts/ProductPosts/').on('child_added', function(data) {
            var postData = data.val();
            dispatch(fetchPRPosts(postData))
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
