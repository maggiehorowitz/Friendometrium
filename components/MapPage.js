import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";
const Images = [
  { uri: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTjh-_FRZOs267JLTuDMazMCzmxXw1v8qR2xepIJGVL0FZARie_lpqdGJvwNQJ7TuXkF3EVih_JQcZBq8NL9AY6pU1htdHLFo_iATdaKHlXUBRNXDzPO4MBiw&usqp=CAc" },
  { uri: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBuPc3V6Vi22dgAorFauicda50AnF7HDVAEusP87c0vLZTQD60nmrr0LcKlNcT6N6hFbFq609L72OSPj7plIpxPXP76zM_3x8fZ1GMKBcZRirbrAzg52levg&usqp=CAc" },
]
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;
export default class screens extends Component {
    state = {
        markers: [
          {
            coordinate: {
              latitude: 45.524548,
              longitude: -122.6749817,
            },
            title: "Starbucks",
            description: "Offer free tampons",
            image: Images[0],
          },
          {
            coordinate: {
              latitude: 45.524698,
              longitude: -122.6655507,
            },
            title: "Target",
            description: "Offer free pads",
            image: Images[1],
          },
          {
            coordinate: {
              latitude: 45.5230786,
              longitude: -122.6701034,
            },
            title: "Costco",
            description: "Offer free tampons",
            image: Images[0],
          },
          {
            coordinate: {
              latitude: 45.521016,
              longitude: -122.6561917,
            },
            title: "McDonald's",
            description: "Offer free pads",
            image: Images[1],
          },
        ],
        region: {
          latitude: 45.52220671242907,
          longitude: -122.6653281029795,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        },
      };

    componentWillMount() {
      this.index = 0;
      this.animation = new Animated.Value(0);
    }
    componentDidMount() {
   // We should detect when scrolling has stopped then animate
   // We should just debounce the event listener here
        this.animation.addListener(({ value }) => {
         let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
         if (index >= this.state.markers.length) {
           index = this.state.markers.length - 1;
         }
         if (index <= 0) {
           index = 0;
         }

         clearTimeout(this.regionTimeout);
         this.regionTimeout = setTimeout(() => {
           if (this.index !== index) {
             this.index = index;
             const { coordinate } = this.state.markers[index];
             this.map.animateToRegion(
               {
                 ...coordinate,
                 latitudeDelta: this.state.region.latitudeDelta,
                 longitudeDelta: this.state.region.longitudeDelta,
               },
               350
             );
           }
         }, 10);
       });
     }
    render() {
        const interpolations = this.state.markers.map((marker, index) => {

            const inputRange = [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
               inputRange,
               outputRange: [1, 2.5, 1],
               extrapolate: "clamp",
             });
             const opacity = this.animation.interpolate({
               inputRange,
               outputRange: [0.35, 1, 0.35],
               extrapolate: "clamp",
             });
             return { scale, opacity };
           });
      return (
        <View style={styles.container}>
          <MapView
            ref={map => this.map = map}
            showsUserLocation= {true}
            initialRegion={this.state.region}
            style={styles.container}
          >
            {this.state.markers.map((marker, index) => {
              return (
                <MapView.Marker key={index} coordinate={marker.coordinate}>
                  <Animated.View style={[styles.markerWrap]}>
                    <Animated.View style={[styles.ring]} />
                    <View style={styles.marker} />
                  </Animated.View>
                </MapView.Marker>
              );
            })}
          </MapView>
          <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this.animation,
                    },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
            style={styles.scrollView}
            contentContainerStyle={styles.endPadding}
          >
            {this.state.markers.map((marker, index) => (
              <View style={styles.card} key={index}>
                <Image
                  source={marker.image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    {marker.description}
                  </Text>
                </View>
              </View>
            ))}
          </Animated.ScrollView>
        </View>
      );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});



AppRegistry.registerComponent("mapfocus", () => screens)
