import {connect} from 'react-redux';
import NewPostList from '../components/NewPostList'
import { removePost } from '../actions';

const mapStateToProps = state => ({
    NewPosts: state.NewPosts
})

const mapDispatchToProps = dispatch => ({
    removePost: id => dispatch(removePost(id))
})

//This is where we connect our NewPostList UI to redux
export default connect(mapStateToProps,mapDispatchToProps)(NewPostList)