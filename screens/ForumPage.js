import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Share } from 'react-native';
import { AppLoading } from 'expo';


export default class ForumPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isReady: false,
      };
    }
  
    render() {
      if (!this.state.isReady) {
        return <AppLoading />;
      }
  
      return (
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    }
  }