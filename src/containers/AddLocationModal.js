//add view style line 17
import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import colors from '../utils/colors';
import MapPage from '../../screens/MapPage'
import TopBar from '../components/TopBar';


class AddLocationModal extends Component {

   render() {
      return (
            <Modal animationType = {"slide"}
               transparent = {false}
               visible={this.props.visible}
               onRequestClose={() => {}}
             >
             <View style = {styles.container}>
             <TopBar
               textValue={this.props.topBarText}
             />
                    <FormInput
                      value={this.state.description}
                      placeholder='Enter a description here'
                      onChangeText={
                        (value) => this.props.updateDesc(value)
                      }
                    />
                    <Button
                      title="Add location"
                      buttonStyle={styles.submitBtn}
                      onPress={() => {
                        this.props.onSubmit(this.state.description);
                      }}
                    />
               </View>
            </Modal>
      )
   }


constructor(props) {
  super(props);
}

state = {
  description: null
};



}


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  marginTop: 50
},
submitBtn: {
  backgroundColor: colors.primary2,
  marginTop: 15
},
headerTitle: {
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 15
}
});

export default AddLocationModal;
