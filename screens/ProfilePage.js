
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Share,Alert,Dialog } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'
import { Ionicons } from '@expo/vector-icons';
import MapPage from './MapPage';
import Fire from "../config/Firebase/FireForumData";
import DialogInput from 'react-native-dialog-input';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


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
        Welcome  {Fire.username} !
        </Text>
        <Text style={{padding:20}}>
        User id: {Fire.uid}


        </Text>

        <Text style={{padding:20}}>
        User id: {Fire.email}
        </Text>


        <Text style={{padding:20}}>
        User name: {Fire.username}
        </Text>

        <Text style={{padding:20}}>
        Photo URI: {Fire.photo}
        </Text>

        <Button
        title="Update My Profile"
        onPress = {() => this.props.navigation.navigate('ProfileUpdate')}
        // onPress={Fire.updateInfo(Fire.username, 'https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png')}
        />
        <View>


      </View>
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
