import {connect} from 'react-redux';
import LocationsOnMap from '../components/LocationsOnMap'
import { deletePlaces, watchNewPlaces, clearPlaces } from '../actions';


const mapStateToProps = state => ({
    locations: state.locations
})

const mapDispatchToProps = dispatch => ({
    deletePlaces: key => dispatch(deletePlaces(key)),
    watchNewPlaces: () => dispatch(watchNewPlaces()),
    clearPlaces:()=>dispatch(clearPlaces())
})

//This is where we connect our FunFactsList UI to redux
export default connect(mapStateToProps,mapDispatchToProps)(LocationsOnMap)
