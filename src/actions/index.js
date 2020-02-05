import { ADD_NEW_POST, CLICKED_POST, REMOVE_POST, FETCH_POSTS } from './actionTypes';
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

// firebase.database().ref('ForumPosts/').on('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot){
//         var postKey = childSnapshot.key;
//         var postData = childSnapshot.val();
//     })
//     dispatch(fetchPosts(postData))
// }

