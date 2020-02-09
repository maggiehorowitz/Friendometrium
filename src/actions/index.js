import { ADD_NEW_POST, CLICKED_POST, REMOVE_POST, FETCH_POSTS, CLEAR, 
    REMOVE_FF_POST, FETCH_FF_POSTS, CLEAR_FF, 
    FETCH_WP_POSTS, CLEAR_WP, REMOVE_WP_POST,
    FETCH_PR_POSTS, CLEAR_PR, REMOVE_PR_POST, } from './actionTypes';
import FireForumData from '../../config/Firebase/FireForumData';
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


