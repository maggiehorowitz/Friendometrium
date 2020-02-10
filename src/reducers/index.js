import {combineReducers} from 'redux'
import NewPosts from './NewPosts'
import NewFunFacts from './NewFunFacts'
import NewWorkPlacePosts from './NewWorkPlacePosts'
import NewProductPosts from './NewProductPosts'


export default combineReducers({
    NewPosts,
    NewFunFacts,
    NewWorkPlacePosts,
    NewProductPosts,
})