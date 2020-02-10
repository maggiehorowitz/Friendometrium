//Connect to firebase, fix delete button, make prettier

import React, { Component } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet,TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addPlaces, watchNewPlaces } from '../src/actions';
import PickLocation from '../src/components/PickLocation';
import Places from './Places';
import AddLocationModal from '../src/containers/AddLocationModal';
import FirePlaceData from '../config/Firebase/FirePlaceData';

class Map extends Component {

state = {
    placeName: "",
    upsertingComment: false,
    description: "",
    key: "",
    controls: {
      location: {
        value: null,
        valid: false,
      }
    }
  };



  updateDesc = value => {
    this.setState({description: value});
  }

placeNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        ...prevState,
        placeName: val,
        key: val + FirePlaceData.uid.toString()
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
        },
      },
      };
    });
  };

  toggleModalVisibilityOn = () => {
      this.setState(prevState => {
        return {
            ...prevState,
            upsertingComment: true,
        };
      });
    };


    toggleModalVisibilityOff = () => {
        this.setState(prevState => {
          return {
              ...prevState,
              upsertingComment: false
          };
        });
      };


//this is done in Ben's addnewpost container
locationAddedHandler = async () => {
    FirePlaceData.savedPlace.update({
        [this.state.key]:{
          placeName: this.state.placeName,
          description: this.state.description,
          location:this.state.controls.location.value
      }
    });

    this.props.onAddLocation(
      this.state.placeName,
      this.state.controls.location.value,
      this.state.description,
      this.state.key
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
                updateDesc = {this.updateDesc}
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
    onAddLocation: (placeName, location, description, key) =>
      dispatch(addPlaces(placeName, location, description, key)),
  };
};
export default connect(null, mapDispatchToProps)(Map);
