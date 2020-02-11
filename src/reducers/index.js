import {combineReducers} from 'redux'
import NewFunFacts from './NewFunFacts'
import NewWorkPlacePosts from './NewWorkPlacePosts'
import NewProductPosts from './NewProductPosts'
import locations from './locations';

const rootReducer = combineReducers({
    NewFunFacts,
    NewWorkPlacePosts,
    NewProductPosts,
    locations
});
export default rootReducer;
