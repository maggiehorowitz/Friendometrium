//Connect to firebase, fix delete button, make prettier

import React, { Component } from 'react';
import { Platform, Modal, View, Text, TextInput, Button, StyleSheet,TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { addPlaces, watchNewPlaces } from '../src/actions';
import PickLocation from '../src/components/PickLocation';
import Places from './Places';
import AddLocationModal from '../src/containers/AddLocationModal';
import FirePlaceData from '../config/Firebase/FirePlaceData';
import Icon from 'react-native-vector-icons/Ionicons';


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

    this.props.navigation.navigate('Locations')
  };


render() {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.leftBar}>
                    <TextInput
                      placeholder="Type a Place Name"
                      value={this.state.placeName}
                      onChangeText= {this.placeNameChangedHandler}
                      style={styles.placeInput}
                    />
                </View>
            </View>
            <View style={styles.topBar}>
              <View style={styles.rightBar}>
                  <TouchableOpacity>
                      <View>
                          <Icon size={25} name="ios-list" color="black" onPress={() => {this.props.navigation.navigate('Locations')}}/>
                      </View>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomRow}>
                    <Button title="Save Location" onPress={this.toggleModalVisibilityOn} />
                </View>
            </View>
            <AddLocationModal
                topBarText={this.state.placeName}
                onTopBarPress = {this.toggleModalVisibilityOff}
                visible={this.state.upsertingComment}
                updateDesc = {this.updateDesc}
                onSubmit={this.locationAddedHandler}
            />
            <View >
                <PickLocation onLocationPick={this.locationPickedHandler} />
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  leftBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  topBar: {
    top: Platform.OS === "android" ? hp('2%') : hp('5%'),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp("2%"),
    marginTop: 10
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
    width: "80%",
    fontSize: 18
    },
  bottomRow:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    position: "absolute",
    flexDirection:'column',
    bottom: 0,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    marginBottom: hp("4%"),
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
});


// const mapDispatchToProps = dispatch => {
//   return {
//     onAddLocation: (placeName, location, description, key) =>
//       dispatch(addPlaces(placeName, location, description, key)),
//   };
// };
export default connect()(Map);
