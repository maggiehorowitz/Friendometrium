import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import Fire from "../config/Firebase/FirePrivateChat";

export default class ChatLoginScreen extends React.Component {
  state = {
    name: "",
  }


  // startPChat = async () => {FirePrivateChat.db}
  //
  // continueNow = async () => {
  //   FireForumData.privateMessage.update({
  //      [this.state.chatID]: {
  //         title: "test message 1",
  //         body: "hi hello Alice",
  //         u_email: FireForumData.email
  //      },
  //      [this.state.chatID]: {
  //         title: "test message 2",
  //         body: "hi hello Bob",
  //         u_email: FireForumData.email
  //      }
  //
  //   });
  // }


  continue = () => {
    if (this.state.name== ""){
      Alert.alert('Please enter a name');
    }
    else{
    Fire.cID= this.state.name;
    this.props.navigation.navigate("PMChat", {name: this.state.name});

  }
  };


    render(){
      return (
        <View style={styles.container}>
          <View style={styles.circle}/>
          <View style={{marginTop: 64}}>
            <Image
              source={require('../assets/chat.png')}
              style={{width:100, height:100, alignSelf: 'center'}}
            />
          </View>
          <View style={{marginHorizontal: 32}}>
            <Text style={styles.header}>Private Messaging</Text>
            <TextInput
              style={styles.input}
              placeholder = "Enter Chat ID"
              onChangeText = {name => {this.setState({name});}}
              value = {this.state.name}
              />

              <View style={{alignItems: "flex-end", marginTop:64}}>
                <TouchableOpacity style ={styles.continue}
                  onPress={this.continue}
                  >
                    <Ionicons name = "md-arrow-round-forward"
                      size = {24}
                      color = '#FFF'
                    />
                </TouchableOpacity>

              </View>


              </View>
            </View>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F5F7'
    },

    circle: {
      width: 500,
      height: 500,
      borderRadius: 500 /2,
      backgroundColor: "#FFF",
      position: "absolute",
      left: -120,
      top: -20
    },
    header: {
      fontWeight: "800",
      fontSize: 36,
      color: '#514E5A',
      marginTop: 32,
      // marginBottom: 32
    },
    input:{
      marginTop:32,
      height:50,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "grey",
      paddingHorizontal: 16,
      color: "#514E5A",
      fontWeight: "600"
    },
    continue:{
      width: 70,
      height: 70,
      borderRadius: 70 /2 ,
      backgroundColor: "#9075E3",
      alignItems: "center",
      justifyContent: "center"
    },
    chatbuttons:{
      backgroundColor: 'lightblue',
      borderColor: 'lightblue',
      borderWidth: 1,
      borderRadius: 4,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 10,
      paddingTop: 20,
      marginTop: 20,
      textAlign:'center',
    }
  });
