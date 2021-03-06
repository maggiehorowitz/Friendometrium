import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import {withNavigation} from 'react-navigation'
import Fire from "../../config/Firebase/Fire";

class FunFacts extends React.Component {

    constructor(props){
        super(props);

    }

    render(){

    return (
      <View style={styles.container}>
        
        <TouchableOpacity
          onPress = {()=> this.props.navigation.navigate('FunFactsMain')}>
            <Card
              image = {require('../Cards/Images/FF.jpg')}
              
              style = {{fontSize:64, fontWeight: 'bold'}}
            >
              
              <Text style={{marginBottom: 10, textAlign:'center', fontSize:20}}>
                Fun Facts Forum
              </Text>
              
          </Card>
        </TouchableOpacity>
          

      </View>
    );

  }

}

export default withNavigation(FunFacts);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,

  },
});
