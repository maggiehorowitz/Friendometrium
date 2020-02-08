
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Share,Alert } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'
import { Ionicons } from '@expo/vector-icons';
import MapPage from './MapPage';
import Fire from "../config/Firebase/FireForumData";


export default class ProfilePage extends Component {



  render() {
    return (

      <View style={styles.container}>
      <View>
      <Image
        style={{width: 200, height: 200}}
        source={{uri: Fire.photo}}
      />
      </View>
        <Text style={styles.profileheader}>
        Welcome  {Fire.email} !
        </Text>

        <Text style={{padding:20}}>
        User id: {Fire.uid}
        </Text>

        <Text style={{padding:20}}>
        User email: {Fire.email}
        </Text>


        <Text style={{padding:20}}>
        User name: {Fire.name}
        </Text>

        <Text style={{padding:20}}>
        Photo URI: {Fire.photo}
        </Text>

        <Button
        title="Update My Profile"
        onPress = {Alert.alert("hello alert!")}
        onPress={Fire.updateInfo("Maggie Horowitz", 'https://i.pinimg.com/474x/e3/0b/ca/e30bcaff86a4258a1b799ca60c8c49a4.jpg')}

        // onPress={Fire.updateInfo("Maggie Horowitz", 'https://i.pinimg.com/474x/e3/0b/ca/e30bcaff86a4258a1b799ca60c8c49a4.jpg')}
        />



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
  },
  profileheader: {
    fontWeight: "800",
    fontSize: 20,
    color: '#514E5A',
    marginTop: 32,
    // marginBottom: 32
  }
})
