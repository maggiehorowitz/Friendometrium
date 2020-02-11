import React, {Component} from 'react';
import { View,FlatList, StyleSheet, Text, Button } from 'react-native';
import ListItem from './ListItem';
import FirePlaceData from '../../config/Firebase/FirePlaceData';
import { deletePlaces } from '../actions/index';


class LocationList extends Component {

    constructor(props){
      super(props);
      this.props.watchNewPlaces();
    }
    render(){
      return (
        <View>
             {this.props.locations.map(Location =>
            <FlatList
              keyExtractor = {(item, index) => item.key}
              style={styles.listContainer}
              data={this.props.locations}
              extraData={this.state}
              renderItem={(Location) => (
                <ListItem
                  key = {Location.key}
                  placeName={Location.placeName}
                  location={Location.location}
                  description = {Location.description}
                />
                )}
              />
            )}
        </View>
    );
    }
}
// render(){
//     return(
//           <View style={styles.container}>
//
//
//           {this.props.locations.map(Location =>
//
//             <Collapse key={Location.key}
//             style={{padding:10, marginTop:10, marginBotton:10, borderWidth: .5, borderColor: '#C7C9C9'  }}>
//               <CollapseHeader style = {{alignItems:'center',padding:10, }}>
//                 <View>
//                   <Text style ={{fontSize: 24}}>{Location.placeName}</Text>
//                 </View>
//               </CollapseHeader>
//               <CollapseBody style ={{alignItems:'center',justifyContent:'center', borderTopWidth: .25, margin: 10}}>
//                 <View>
//                   <Text style ={{fontSize: 24, margin: 10}}>{Location.description}</Text>
//                 </View>
//                 <View>
//                   <Button
//                     title = 'Remove Post'
//                     onPress = {() => {this.props.deletePlaces(Location.key)}}/>
//                 </View>
//               </CollapseBody>
//             </Collapse>
//
//           )}
//             </View>
//         )
//       }






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
