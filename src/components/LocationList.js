import React, {Component} from 'react';
import { View,FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import FirePlaceData from '../../config/Firebase/FirePlaceData';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";

class LocationList extends Component {

    constructor(props){
      super(props);
      this.props.watchNewPlaces();
    }

render(){
    return(
          <View style={styles.container}>


          {this.props.locations.map(item =>

            <Collapse key={item.key}
            style={{padding:10, marginTop:10, marginBotton:10, borderWidth: .5, borderColor: '#C7C9C9'  }}>
              <CollapseHeader style = {{alignItems:'center',padding:10, }}>
                <View>
                  <Text style ={{fontSize: 24}}>{item.placeName}</Text>
                </View>
              </CollapseHeader>
              <CollapseBody style ={{alignItems:'center',justifyContent:'center', borderTopWidth: .25, margin: 10}}>
                <View>
                  <Text style ={{fontSize: 24, margin: 10}}>{item.body}</Text>
                </View>
                <View>
                  <Button
                    title = 'Remove Post'
                    onPress = {() => {this.props.deletePlaces(item.key)}}/>
                </View>
              </CollapseBody>
            </Collapse>

          )}
            </View>
        )
      }




}


const styles = StyleSheet.create({
      listContainer: {
        width: "100%"
    },
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35

    },
});

export default LocationList;
