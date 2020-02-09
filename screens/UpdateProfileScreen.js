import React from 'react';
import { ImagePicker, Permissions } from 'expo';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	ImageEditor
} from 'react-native';

import Fire from '../config/Firebase/FireProfile';

export default class UpdateProfileScreen extends React.Component {
	state = {
		name: '',
    photolink: '',
		avatar: ''
	};

  updateMe = ()=> {
    // Fire.updateName(this.state.name);
    Fire.updatePhoto(this.state.photolink);

  }

  goBackToProfile = () => {
    this.props.navigation.navigate('Home')
  }

  // onChangeTextName = (text) => {
  //     this.setState({ name: text })
  //  }
   onChangePhotoLink = (text) => {
       this.setState({ photolink: text })
    }

    // <Text style={styles.title}>Update My Display Name:</Text>
    // <TextInput
    //   placeholder="Type your new name here..."
    // 	style={styles.nameInput}
    // 	onChangeText={this.onChangeTextName}
    // 	value={this.state.name}
    // />
    // <Button
    // 	title="Or Upload a Profile Image"
    // 	style={styles.buttonText}
    // 	onPress={this.onImageUpload}
    // />



	render() {
		return (
			<View>


        <Text style={styles.title}>Enter a link to a photo of you:</Text>
        <TextInput
          placeholder="Enter a valid link to an online photo of you"
					style={styles.nameInput}
					onChangeText={this.onChangePhotoLink}
					value={this.state.photolink}
				/>

        <View style={styles.chatbuttons}>
				<Button
					title="Save"
					onPress={this.updateMe}
          onPress = {() =>{ this.updateMe(); this.goBackToProfile(); }}
          // this.props.navigation.navigate("ProfilePage")
				/>
        </View>



			</View>
		);
	}
}



const offset = 16;
const styles = StyleSheet.create({
	title: {
		marginTop: 50,
		marginLeft: offset,
		fontSize: offset
	},
	nameInput: {
		height: offset * 2,
		margin: offset,
		paddingHorizontal: offset,
		borderColor: '#111111',
		borderWidth: 1,
		fontSize: offset
	},
	buttonText: {
		marginLeft: offset,
		fontSize: 42
	},
  chatbuttons:{
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 4,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 10,
    paddingTop: 20,
    marginTop: 20,
    textAlign:'center',
  }
});
