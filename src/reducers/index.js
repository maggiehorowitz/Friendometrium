import {combineReducers} from 'redux'
import NewFunFacts from './NewFunFacts'
import NewWorkPlacePosts from './NewWorkPlacePosts'
import NewProductPosts from './NewProductPosts'
import locationsReducer from '../reducers/locations';


export default combineReducers({
    NewFunFacts,
    NewWorkPlacePosts,
    NewProductPosts,
    locationsList: locationsReducer

})
