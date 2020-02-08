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
    }

state = { 
    placeName: "",
    upsertingComment: false,
    controls: {
      location: {
        value: null,
        valid: false,
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

  toggleModalVisibilityOn = () => {
      this.setState(prevState => {
        return {
            ...prevState.controls,
            upsertingComment: true
        };
      });
    };


    toggleModalVisibilityOff = () => {
        this.setState(prevState => {
          return {
              ...prevState.controls,
              upsertingComment: false
          };
        });
      };


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
            <Button title="Save Location" onPress={this.toggleModalVisibilityOn} />
            <AddLocationModal
                topBarText={this.state.placeName}
                onTopBarPress = {this.toggleModalVisibilityOff}
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
    alignItems: "center",
    flex: 2
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 30,
    padding: 10
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  placeInput: {
    width: "70%",
    fontSize: 18
  }
});
const mapDispatchToProps = dispatch => {
  return {
    onAddLocation: (placeName, location, description) =>
      dispatch(addPlaces(placeName, location, description))
  };
};
export default connect(null, mapDispatchToProps)(Map);
