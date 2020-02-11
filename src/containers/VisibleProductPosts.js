import {connect} from 'react-redux';
import ProductPostsList from '../components/ProductPostsList'
import { removePRPost, watchNewPRPosts, clearPRPosts } from '../actions';


const mapStateToProps = state => ({
    NewProductPosts: state.NewProductPosts
})

const mapDispatchToProps = dispatch => ({
    removePRPost: id => dispatch(removePRPost(id)),
    watchNewPRPosts: () => dispatch(watchNewPRPosts()),
    clearPRPosts: () => dispatch(clearPRPosts()),
})

//This is where we connect our ProductPostsList UI to redux
export default connect(mapStateToProps,mapDispatchToProps)(ProductPostsList)