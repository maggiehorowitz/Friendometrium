
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
import Svg, { Path } from "react-native-svg";





export default class ProfilePage extends Component {


  render() {
    return (

      <View style={styles.container}>

      <Image
        style={{width: 200, height: 200}}
        source={{uri: Fire.photo}}
      />


<View style={styles.title_container}>
        <Text style={styles.profileheader}>
        Hi  {Fire.username} !
        </Text>
        <Text style={styles.subheader}>User ID: {Fire.uid}</Text>
</View>


<View style={styles.container3}>

  <Text style={styles.mainText}>
  Username
  <Text style={styles.regularText}>
   :      {Fire.name}
  </Text>
  </Text>



  <Text style={styles.mainText}>
  Email
  <Text style={styles.regularText}>
   :      {Fire.email}
  </Text>
  </Text>


  <Text style={styles.mainText}>
  Photo URL
    <Text style={styles.regularText}>:</Text>
  </Text>
  <Text style={styles.regularText}>
  {Fire.photo}
  </Text>

</View>

<View style={styles.button_container}>
        <Button
        title="Update My Image"
        onPress = {() => this.props.navigation.navigate('ProfileUpdate')}
        // onPress={Fire.updateInfo(Fire.username, 'https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png')}
        />
        </View>








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
    fontWeight: "900",
    fontSize: 36,
    color: '#514E5A',
    marginTop: 10,
  },
  subheader: {
    backgroundColor: "transparent",
    color: "rgba(176,176,176,1)",
    opacity: 0.8,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5
  },
  container2: {
    marginTop:20,
    marginBottom:20,
    width: 335,
    height: 75,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowOffset: {
      height: 5,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.118064990942029)",
    shadowOpacity: 1,
    shadowRadius: 15
  },
  container3: {
    width: 330,
    height: 230,
    marginTop: 10,
    marginBottom:10,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 16,
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.118064990942029)",
    shadowOpacity: 1,
    shadowRadius: 20
  },
  title_container: {
    width: 335,
    height: 100,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 16,
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.118064990942029)",
    shadowOpacity: 1,
    shadowRadius: 20
  },
  button_container: {
    width: 200,
    height: 100,
    marginTop: 30,
    marginBottom:10,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 16,
    shadowOffset: {
      height: 10,
      width: 0
    },
  },
  mainText: {
    fontWeight: "800",
    padding: 20,
    fontSize: 16,
    color: '#514E5A',
    marginTop: 0,
  },
  regularText: {
    fontWeight: "400",
    padding: 5,
    fontSize: 14,
    color: '#514E5A',
    marginTop: 0,
  },

})
