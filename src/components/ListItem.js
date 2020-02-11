
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import VisibleMap from "../containers/VisibleMap";

class ListItem extends React.Component {
    state= {
        showMap: false
    };

    constructor(props){
      super(props);

    }

    toggleMap = () => {
        if (this.state.showMap == true) {
          this.setState({ showMap: false });
        } else {
          this.setState({ showMap: true });
        }
    };


    render(){
        return(
            <View style={styles.listItem}>
                <Collapse key={this.props.key} >
                <CollapseHeader style = {{alignItems:'center',padding:5, }}>
                  <View style={styles.contain}>
                    <View style={{width: "70%"}}>
                        <Text style={styles.textTitle}>
                            {this.props.placeName}
                        </Text>
                    </View>
                        <TouchableOpacity>
                            <View style={styles.mapIcon}>
                                <Icon size={25} name="ios-map" color="blue" onPress={this.toggleMap}/>
                            </View>
                        </TouchableOpacity>

                    <View>
                        <VisibleMap
                            visible={this.state.showMap}
                            onRequestClose= {this.toggleMap}
                            focusOnLoc = {this.props.location}
                        />
                    </View>
                  </View>
                  </CollapseHeader>
                  <CollapseBody style ={{alignItems:'center',justifyContent:'center', borderTopWidth: .25, margin: 5}}>
                  <View style={{width: "80%"}}>
                      <Text style={styles.textBody}>
                          {this.props.description}
                      </Text>
                  </View>
                  </CollapseBody>
              </Collapse>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin:10,
},
  listItem: {
    width: "95%",
    marginBottom: 10,
    marginLeft: 10,
    padding: 5,
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
  textTitle: {
    paddingTop: 5,
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  textBody: {
    paddingTop: 5,
    color: "black",
    fontSize: 16,
  },
  mapIcon: {
    alignItems: "center",
    paddingTop: 5
  }
});
export default ListItem;
