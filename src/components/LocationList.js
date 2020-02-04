import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';


const LocationList = props => {
  return (
    <FlatList
      keyExtractor = { (item, index) => index.toString() }
      style={styles.listContainer}
      data={props.locations}
      extraData={this.state}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.placeName}
          placeLocation={info.item.location}
          onItemDeleted={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default LocationList;
