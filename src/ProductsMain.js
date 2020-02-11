import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import VisibleProductPosts from './containers/VisibleProductPosts';

class ProductsMain extends React.Component {
    
    constructor(props){
        super(props);

    }
  
    render(){
    
    return (
      <View style={styles.container}>
          <Header
              leftComponent = {<Icon
                name="arrow-back"
                color = '#fff'
                size = {32}
                onPress={() => this.props.navigation.navigate('Forum')}
                />}
              centerComponent = {{text: 'Products!', style: { color: '#fff', fontSize: 32, fontWeight: 'bold'}}}
              rightComponent = {<Icon
                name = 'add'
                color = '#fff'
                size = {32}
                onPress={() => this.props.navigation.navigate('AddNewPR')}
                />}
              containerStyle={{
                backgroundColor: '#E06666',
                justifyContent: 'center'
              }}
              />  

          <ScrollView
          showsVerticalScrollIndicator = {false}>
            <Text style = {{fontSize:20, textAlign: 'center', padding: 10}}>
              Welcome to the Products forum!</Text>
           
            <VisibleProductPosts/>

          </ScrollView>
            
        
      </View>
    );
  
  }
  
}

export default ProductsMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});