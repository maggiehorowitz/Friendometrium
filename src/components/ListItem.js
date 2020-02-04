import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ListItem = props => (
    <View style={styles.listItem}>
      <View style={styles.contain}>
        <View style={{width: "70%"}}><Text style={styles.text}>{props.placeName}</Text></View>
          <TouchableOpacity>
            <View style={styles.trash}>
              <Icon size={25} name="ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
      </View>
    </View>
);
const styles = StyleSheet.create({
  listItem: {
    width: "95%",
    marginBottom: 7,
    marginLeft: 10,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#aaa"
  },
  contain: {
    flexDirection: "row"
  },
  text: {
    paddingTop: 5,
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  trash: {
    alignItems: "center",
    paddingTop: 5
  }
});
export default ListItem;
