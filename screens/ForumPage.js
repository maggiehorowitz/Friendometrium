import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Share } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'
import { Ionicons } from '@expo/vector-icons';


export default class ForumPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source ={require("../assets/chat.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
        <Text style={{padding:0}}>
        This is the Forum Page
        </Text>
        <Text style={{padding:20}}>
        Currently Being Implemented
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
