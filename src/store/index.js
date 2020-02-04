import { createStore, combineReducers} from 'redux';
import locationsReducer from '../reducers/locations';
import NewPosts from '../reducers/NewPosts'

const rootReducer = combineReducers({
    NewPosts,
    locationsList: locationsReducer
});
export default store = createStore(rootReducer)
