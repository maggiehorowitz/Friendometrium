import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import VisiblePlaces from '../src/containers/VisiblePlaces';


class Places extends Component {

    constructor(props){
        super(props);
    }



render() {
    return (
      <View style={styles.container}>
        <VisiblePlaces/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35

  }
});

export default Places;
