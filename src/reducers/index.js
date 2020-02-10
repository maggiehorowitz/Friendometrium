import {combineReducers} from 'redux'
import NewFunFacts from './NewFunFacts'
import NewWorkPlacePosts from './NewWorkPlacePosts'
import NewProductPosts from './NewProductPosts'


export default combineReducers({
    NewFunFacts,
    NewWorkPlacePosts,
    NewProductPosts,
})