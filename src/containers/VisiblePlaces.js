import {connect} from 'react-redux';
import LocationList from '../components/LocationList'
import { deletePlaces, watchNewPlaces } from '../actions';


const mapStateToProps = state => ({
    locations: state.locations
})

const mapDispatchToProps = dispatch => ({
    deletePlaces: key => dispatch(deletePlaces(key)),
    watchNewPlaces: () => dispatch(watchNewPlaces()),
})

//This is where we connect our FunFactsList UI to redux
export default connect(mapStateToProps,mapDispatchToProps)(LocationList)
