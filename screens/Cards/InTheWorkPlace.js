import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { Card } from 'react-native-elements';

class InTheWorkPlace extends React.Component {
    
    constructor(props){
        super(props);

    }
  
    render(){
    
    return (
      <View style={styles.container}>

    
          <Card
              title='In The WorkPlace'>
              <Text style={{marginBottom: 10}}>
                *WorkPlace *WorkPlace *WorkPlace *WorkPlace *WorkPlace *WorkPlace *WorkPlace
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

export default InTheWorkPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
});