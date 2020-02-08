import {connect} from 'react-redux';
import NewPostList from '../components/NewPostList'
import { ClickedPost } from '../actions';

const mapStateToProps = state => ({
    NewPosts: state.NewPosts
})

const mapDispatchToProps = dispatch => ({
    ClickedPost: id => dispatch(ClickedPost(id))
})

//This is where we connect our NewPostList UI to redux
export default connect(mapStateToProps,mapDispatchToProps)(NewPostList)