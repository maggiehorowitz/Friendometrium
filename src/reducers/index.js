import {combineReducers} from 'redux'
import NewPosts from './NewPosts'
import GetPosts from './GetPosts'

export default combineReducers({
    NewPosts,
    GetPosts,
})