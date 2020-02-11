import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import VisibleFunFacts from './containers/VisibleFunFacts';

class FunFactsMain extends React.Component {
    
    constructor(props){
        super(props);

    }
  
    render(){
    
    return (
      <View style = {styles.container}>
            <Header
              leftComponent = {<Icon
                name="arrow-back"
                color = '#fff'
                size = {32}
                onPress={() => this.props.navigation.navigate('Forum')}
                />}
              centerComponent = {{text: 'Fun Facts!', style: { color: '#fff', fontSize: 32, fontWeight: 'bold'}}}
              rightComponent = {<Icon
                name = 'add'
                color = '#fff'
                size = {32}
                onPress={() => this.props.navigation.navigate('AddNewFF')}
                />}
              containerStyle={{
                backgroundColor: '#E06666',
                justifyContent: 'center'
              }}
              />          

          <ScrollView
          showsVerticalScrollIndicator = {false}>
            <Text style = {{fontSize:20, textAlign: 'center', padding: 10}}>
              Welcome to the Fun Facts forum!</Text>

           
            <VisibleFunFacts/>

          </ScrollView>
        
      </View>
    );
  
  }
  
}

export default FunFactsMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    
  },
});