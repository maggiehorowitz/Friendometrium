import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Share } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import { Button } from 'react-native-elements'



export default class HomePage extends React.Component {


render() {
    return (
      <View style={styles.container}>
      <Image source ={require("../assets/friendometrium.jpg")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
      <Text style={styles.profileheader}>
      Welcome to Friendometrium!
      </Text>
        <Text style={{padding:20}}>
        Friendometrium is a great app for women to form a strong community for supporting women's health. Don't forget to check
        out the maps section and the chat section!
        </Text>
        <TouchableOpacity style={styles.shareBtn} onPress={()=>SharePost()}>
                <Text style={styles.shareTxt}>SHARE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const SharePost = async () => {
  try {
    const result = await Share.share({
      url:"https://github.com/maggiehorowitz/Friendometrium"
    });

    if (result.action === Share.sharedAction) {
      alert("Post Shared")
    } else if (result.action === Share.dismissedAction) {
      // dismissed
      alert("Post cancelled")
    }
  } catch (error) {
    alert(error.message);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  profileheader: {
    fontWeight: "900",
    fontSize: 20,
    color: '#514E5A',
    marginTop: 10,
  },
})
