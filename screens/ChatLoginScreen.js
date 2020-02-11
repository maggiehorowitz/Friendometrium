import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import Fire from "../config/Firebase/Fire";
// import Fire2 from "../config/Firebase/Fire2";

export default class ChatLoginScreen extends React.Component {
  state = {
    // name: ""
    name: Fire.name
  }


  continue = () => {
    this.props.navigation.navigate("FunFactsChat", {name: this.state.name})
  };

  continue2 = () => {
    this.props.navigation.navigate("AdviceChat", {name: this.state.name})
  };

  continue3 = () => {
    this.props.navigation.navigate("ProductReviewChat", {name: this.state.name})
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
          <Text style={styles.header}>Friendometrium Chat Groups</Text>


            <View style={styles.chatbuttons}>
            <Button
            title="Fun Facts Chat"
            onPress={this.continue}
            />
            </View>

            <View style={styles.chatbuttons}>
            <Button
            title="Advice Chat"
            onPress={this.continue2}
            />
            </View>

            <View style={styles.chatbuttons}>
            <Button
            title="Product Review Chat"
            onPress={this.continue3}
            />
            </View>

            </View>
          </View>


            // <View style={{alignItems: "flex-end", marginTop:64}}>
            //   <TouchableOpacity style ={styles.continue}
            //     onPress={this.continue}>
            //       <Ionicons name = "md-arrow-round-forward"
            //         size = {24}
            //         color = '#FFF'
            //       />
            //   </TouchableOpacity>
            //
            // </View>
            //
            //
            //
            //
            // <View style={{alignItems: "flex-end", marginTop:64}}>
            //   <TouchableOpacity style ={styles.continue}
            //     onPress={this.continue2}>
            //       <Ionicons name = "ios-add-circle-outline"
            //         size = {24}
            //         color = '#FFF'
            //       />
            //   </TouchableOpacity>
            //
            // </View>
            //
            //


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
    fontWeight: "900",
    fontSize: 20,
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
    marginTop: 40,
    textAlign:'center',
  }
});
