import {combineReducers} from 'redux'
import NewPosts from './NewPosts'
import locationsReducer from '../reducers/locations';


const rootReducer = combineReducers({
    NewPosts,
    locationsList: locationsReducer
});

export default rootReducer
