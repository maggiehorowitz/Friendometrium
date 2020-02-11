//after line 13 add something for a dropdown of description? go back to cards to navigate

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";

const ListItem = props => (
    <View style={styles.listItem}>
        <Collapse key={props.key} >
        <CollapseHeader style = {{alignItems:'center',padding:10, }}>
          <View style={styles.contain}>
            <View style={{width: "70%"}}>
                <Text style={styles.text}>
                    {props.placeName}
                </Text>
            </View>
              <TouchableOpacity>
                <View style={styles.mapIcon}>
                  <Icon size={25} name="ios-map" color="blue"/>
                </View>
              </TouchableOpacity>
          </View>
          </CollapseHeader>
          <CollapseBody style ={{alignItems:'center',justifyContent:'center', borderTopWidth: .25, margin: 10}}>
          <View style={{width: "70%"}}>
              <Text style={styles.text}>
                  {props.description}
              </Text>
          </View>
          </CollapseBody>
      </Collapse>
    </View>
);
const styles = StyleSheet.create({
  listItem: {
    width: "95%",
    marginBottom: 10,
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
  mapIcon: {
    alignItems: "center",
    paddingTop: 5
  }
});
export default ListItem;
