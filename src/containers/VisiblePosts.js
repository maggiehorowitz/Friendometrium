import {connect} from 'react-redux';
import NewPostList from '../components/NewPostList'
import { removePost, watchNewPosts, clearPosts } from '../actions';


const mapStateToProps = state => ({
    NewPosts: state.NewPosts
})

const mapDispatchToProps = dispatch => ({
    removePost: id => dispatch(removePost(id)),
    watchNewPosts: () => dispatch(watchNewPosts()),
    clearPosts: () => dispatch(clearPosts()),
})

//This is where we connect our NewPostList UI to redux
export default connect(mapStateToProps,mapDispatchToProps)(NewPostList)