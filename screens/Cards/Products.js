import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import {withNavigation} from 'react-navigation'
import Fire from "../../config/Firebase/Fire";

class Products extends React.Component {

    constructor(props){
        super(props);

    }

    render(){

    return (
      <View style={styles.container}>

<TouchableOpacity
        onPress = {()=> this.props.navigation.navigate('ProductsMain')}>
          <Card
            image = {require('../Cards/Images/PR2.jpg')}
          >
            
            <Text style={{marginBottom: 10, textAlign:'center', fontSize:20}}>
              Products Forum
            </Text>
            
        </Card>
      </TouchableOpacity>

      </View>
    );

  }

}

export default withNavigation(Products);

const styles = StyleSheet.create({
  container: {
    padding: 20,

  },
});
