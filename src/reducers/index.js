import {combineReducers} from 'redux'
import NewPosts from './NewPosts'
import locations from '../reducers/locations';


const rootReducer = combineReducers({
    NewPosts,
    locations
});

export default rootReducer
