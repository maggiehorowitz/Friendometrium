import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { Card } from 'react-native-elements';

class FunFacts extends React.Component {
    
    constructor(props){
        super(props);
        
    }
    


    render(){
    
    return (
      <View style={styles.container}>

          <Card
              title='Fun Facts'>
              <Text style={{marginBottom: 10}}>
                *Fun Fact *Fun Fact *Fun Fact *Fun Fact *Fun Fact *Fun Fact
              </Text>
              <Button
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Chat Now!'
                onPress = {() => this.props.navigation.navigate('Chat')}
                />
          </Card>
        
      </View>
    );
  
  }
  
}

export default FunFacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
});