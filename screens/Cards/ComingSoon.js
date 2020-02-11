import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import {withNavigation} from 'react-navigation'
import Fire from "../../config/Firebase/Fire";

class ComingSoon extends React.Component {

    constructor(props){
        super(props);

    }

    render(){

    return (
      <View style={styles.container}>
        
        <TouchableOpacity
          >
            <Card
              title='Coming Soon!'
              style = {{fontSize:64, fontWeight: 'bold'}}
            >
              
              <Text style={{marginBottom: 10, textAlign:'center', fontSize:20}}>
                More topics coming soon!
              </Text>
              
          </Card>
        </TouchableOpacity>
          

      </View>
    );

  }

}

export default withNavigation(ComingSoon);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,

  },
});
