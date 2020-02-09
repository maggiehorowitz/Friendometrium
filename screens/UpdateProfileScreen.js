import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Share,TextInput} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';



export default class HomePage extends React.Component {


render() {
  return (

    <View style={styles.container}>
    <View>
      <Text style={styles.profileheader}>
    Change your profile info here!
      </Text>

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
