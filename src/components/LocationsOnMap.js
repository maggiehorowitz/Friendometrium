import React, {Component} from 'react';
import FirePlaceData from '../../config/Firebase/FirePlaceData';
import { View, Image, Button, StyleSheet, Text, Dimensions, Modal } from 'react-native';
import MapView, {Marker, ProviderPropType, Callout} from 'react-native-maps';
import Places from '../../screens/Places'

class LocationsOnMap extends Component {
    state = {
      focusedLocation: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      },
    };

    constructor(props){
      super(props);
      this.props.clearPlaces();
      this.props.watchNewPlaces();
    }


    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
          ...this.state.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        });
        this.setState(prevState => {
          return {
            focusedLocation: {
              ...prevState.focusedLocation,
              latitude: coords.latitude,
              longitude: coords.longitude
            },
          };
        });
      };

    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
          const coordsEvent = {
            nativeEvent: {
              coordinate: {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
              }
            }
          };
          this.pickLocationHandler(coordsEvent);
        },
      err => {
        console.log(err);
        alert("Fetching the Position failed, please pick one manually!");
      })
      }


    generateMarker = (item) => ({
      item,
      placeName: item.placeName,
      description: item.description,
      location: item.location,
      key: item.key
    })

    render() {
        let fbLocs = this.props.locations.map((item, id) => this.generateMarker(item));

    return (
        <Modal animationType = {"slide"}
           transparent = {false}
           visible={this.props.visible}
         >
          <View style={styles.container}>
              <View style={styles.button}>
                <Button title="Where am I" onPress={this.getLocationHandler} />
              </View>
            <MapView
              initialRegion={this.state.focusedLocation}
              style={styles.map}
              ref={ref => this.map = ref}
              followUserLocation = {true}
              showsUserLocation = {true}
            >
            {fbLocs.map((item) => (
              <Marker
                key={item.key}
                title = {item.placeName}
                coordinate={item.location}
              >
              <Callout tooltip>
                    <View style ={styles.calloutStyle}>
                        <View>
                            <Text style={{fontWeight: "bold"}}>
                                {item.placeName}
                            </Text>
                        </View>
                    </View>
               </Callout>
            </Marker>
          ))}
          </MapView>
            <View style={styles.button}>
            <Button
              title="Back to Places"
              buttonStyle={styles.button}
              onPress={this.props.onRequestClose}
            />
            </View>
          </View>
          </Modal>

        );
      }
    }
const styles = StyleSheet.create({
      container: {
        width: "100%",
        alignItems: "center",
        padding:20,
      },
      map: {
        width: "100%",
        height: 750
        
      },
      button: {
        margin: 8
    },
    calloutStyle: {
      width: 200,
      height: 75,
      backgroundColor: "#fff",
      padding: 20,
      alignItems: "center",

    },
});
export default LocationsOnMap;
