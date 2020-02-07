//Connect to firebase, fix delete button, make prettier

import React, { Component } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet,TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addPlaces } from '../src/actions/index';
import PickLocation from '../src/components/PickLocation';
import Places from './Places';
import AddLocationModal from '../src/containers/AddLocationModal';

class Map extends Component {
    constructor() {
        super()
        this.state.upsertingComment = false,
        this.toggleModalVisibility = this.toggleModalVisibility.bind(this);

    }
state = {
    placeName: "",
    controls: {
      location: {
        value: null,
        valid: false,
        upsertingComment: false
      }
    }

  };

placeNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        ...prevState,
        placeName: val
      };
    });
  };
locationPickedHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      };
    });
  };

toggleModalVisibility(){
    this.setState({ upsertingComment: true})
}




locationAddedHandler = () => {
    this.props.onAddLocation(
      this.state.placeName,
      this.state.controls.location.value,
      this.description
    );
    this.props.navigation.navigate('Locations')
  };
render() {
return (
        <View style={styles.container}>
            <View style={styles.button}>
              <TextInput
                placeholder="Type a Place Name"
                value={this.state.placeName}
                onChangeText= {this.placeNameChangedHandler}
                style={styles.placeInput}
              />
            <Button title="Save Location" onPress={this.toggleModalVisibility} />
            <AddLocationModal
                topBarText="New comment"
                visible={this.state.upsertingComment}
                onSubmit={this.locationAddedHandler}
            />
            </View>
            <PickLocation onLocationPick={this.locationPickedHandler} />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
<<<<<<< Updated upstream
    flex: 2,
    alignItems: "center",
=======
    flex: 3,
    alignItems: "center"
>>>>>>> Stashed changes
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
<<<<<<< Updated upstream
    margin: 30,
    padding: 10
=======
    margin: 8,
    flex: 1
>>>>>>> Stashed changes
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  placeInput: {
    width: "70%",
<<<<<<< Updated upstream
    fontSize: 18
=======
>>>>>>> Stashed changes
  }
});
const mapDispatchToProps = dispatch => {
  return {
    onAddLocation: (placeName, location) =>
      dispatch(addPlaces(placeName, location))
  };
};
export default connect(null, mapDispatchToProps)(Map);
