import {connect} from 'react-redux';
import WorkPlaceList from '../components/WorkPlaceList'
import { removeWPPost, watchNewWPPosts, clearWPPosts } from '../actions';


const mapStateToProps = state => ({
    NewWorkPlacePosts: state.NewWorkPlacePosts
})

const mapDispatchToProps = dispatch => ({
    removeWPPost: id => dispatch(removeWPPost(id)),
    watchNewWPPosts: () => dispatch(watchNewWPPosts()),
    clearWPPosts: () => dispatch(clearWPPosts()),
})

//This is where we connect our WorkPlaceList UI to redux
export default connect(mapStateToProps,mapDispatchToProps)(WorkPlaceList)