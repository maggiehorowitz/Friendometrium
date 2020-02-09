import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class TopBar extends React.Component {

  render() {
    return (

        <View style={styles.topBar}>
        <TouchableHighlight onPress={() => this.props.onTopBarPress()}>
          <Icon name="chevron-left" color="white" />
          </TouchableHighlight>
          <Text style={styles.topBarText}>{this.props.textValue}</Text>
        </View>
    );
  }

}

TopBar.propTypes = {
 onPress: PropTypes.func,
 textValue: PropTypes.string
}

const styles = StyleSheet.create({
  topBar: {
    alignItems: 'center',
    backgroundColor: '#3d87f0',
    height: 50,
    flexDirection: 'row',
    paddingLeft: 10
  },
  topBarText: {
    fontSize: 17,
    marginLeft: 20,
    color: 'white'
  }
});

export default TopBar;
