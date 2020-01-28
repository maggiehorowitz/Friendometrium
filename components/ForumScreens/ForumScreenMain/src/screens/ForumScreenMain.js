import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import MaterialHeader1 from "../components/MaterialHeader1";


export default class ForumScreenMain extends React.Component{

  render(){
    return (
    
      <View style={styles.container}>
        <View style={styles.textStack}>
          <Text style={styles.text}>
            Start from scratch{"\n"}
            {"\n"}or{"\n"}
            {"\n"}Drag and drop a Sketch file
          </Text>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle2}
          ></MaterialCardWithImageAndTitle>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle3}
          ></MaterialCardWithImageAndTitle>
        </View>
        <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle}
        ></MaterialCardWithImageAndTitle>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle1}
        ></MaterialCardWithImageAndTitle>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "#121212",
    position: "absolute",
    fontSize: 24,
    textAlign: "center",
    left: 45,
    top: 76
  },
  materialCardWithImageAndTitle2: {
    top: 191,
    left: 0,
    width: 375,
    height: 177,
    position: "absolute"
  },
  materialCardWithImageAndTitle3: {
    top: 0,
    width: 375,
    height: 177,
    position: "absolute",
    left: 0
  },
  textStack: {
    width: 375,
    height: 368,
    marginTop: 270
  },
  materialHeader1: {
    width: 375,
    height: 76,
    marginTop: -638
  },
  materialCardWithImageAndTitle: {
    width: 375,
    height: 177,
    marginTop: 8,
    alignSelf: "center"
  },
  materialCardWithImageAndTitle1: {
    width: 375,
    height: 177,
    marginTop: 394,
    alignSelf: "center"
  }
});

