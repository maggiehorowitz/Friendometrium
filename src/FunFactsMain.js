import React from 'react';
import { StyleSheet, Text, View, Button, Icon } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import VisibleFunFacts from './containers/VisibleFunFacts';

class FunFactsMain extends React.Component {
    
    constructor(props){
        super(props);

    }
  
    render(){
    
    return (
      <View style={styles.container}>
          <Text style={{marginTop:10, fontSize:30, textAlign:'center'}}>Fun Facts!</Text>
          <Button
            title="New Post"
            onPress={() => this.props.navigation.navigate('AddNewFF')}
            />

          <ScrollView
          showsVerticalScrollIndicator = {false}>

           
            <VisibleFunFacts/>

          </ScrollView>
          <Button
            title="Back to Main Forum"
            onPress={() => this.props.navigation.navigate('Forum')}
            />
            
        
      </View>
    );
  
  }
  
}

export default FunFactsMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
});