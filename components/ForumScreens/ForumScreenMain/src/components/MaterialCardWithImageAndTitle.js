import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonShare1 from "./MaterialButtonShare1";
import MaterialButtonGrey1 from "./MaterialButtonGrey1";

function MaterialCardWithImageAndTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Discussion Topic</Text>
          <Text style={styles.subtitleStyle}>Posted by:</Text>
        </View>
        <Image
          source={require("../assets/images/cardImage.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}></View>
      <MaterialButtonShare1
        style={styles.materialButtonShare1}
      ></MaterialButtonShare1>
      <MaterialButtonGrey1
        style={styles.materialButtonGrey1}
      ></MaterialButtonGrey1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden",
    flexDirection: "row"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 16
  },
  cardItemImagePlace: {
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    margin: 16
  },
  actionBody: {
    flexDirection: "row",
    padding: 8
  },
  materialButtonShare1: {
    top: 100,
    left: 124,
    width: 56,
    height: 56,
    position: "absolute"
  },
  materialButtonGrey1: {
    top: 112,
    left: 12,
    width: 100,
    height: 36,
    position: "absolute"
  }
});

export default MaterialCardWithImageAndTitle;
