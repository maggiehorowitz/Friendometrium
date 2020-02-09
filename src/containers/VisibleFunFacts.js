import {connect} from 'react-redux';
import FunFactsList from '../components/FunFactsList'
import { removeFFPost, watchNewFFPosts, clearFFPosts } from '../actions';


const mapStateToProps = state => ({
    NewFunFacts: state.NewFunFacts
})

const mapDispatchToProps = dispatch => ({
    removeFFPost: id => dispatch(removeFFPost(id)),
    watchNewFFPosts: () => dispatch(watchNewFFPosts()),
    clearFFPosts: () => dispatch(clearFFPosts()),
})

//This is where we connect our FunFactsList UI to redux
export default connect(mapStateToProps,mapDispatchToProps)(FunFactsList)