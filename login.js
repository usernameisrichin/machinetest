import React, { Component } from 'react';
import {TextInput, View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'native-base';

var {height, width} = Dimensions.get('window');
import OAuthManager from 'react-native-oauth';

class LoginScreen extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	onAuthorize(){
		console.log("here");
		const config =  {
		  twitter: {
		    consumer_key: 'nXx0qURn4RQtSltyHyxVLLD50',
		    consumer_secret: 'A5C0VnapjyD5CVUkjenWD8W0RTabfZ5gQ19C4ThJ5rpBeJFOKJ'
		  }
		}
		const manager = new OAuthManager('taskstest')
		// configure the manager
		manager.configure(config);

		manager.authorize('twitter')
		  .then(resp => this.setState({resp},()=>{this.onNavigate()}))
		  .catch(err => console.log(err));
	}
	onNavigate(){
		if(this.state.resp && this.state.resp.status === 'ok'){
			this.props.navigation.navigate('FormInput');
		}
	}

	render(){
		return(
			<SafeAreaView style={{flex: 1}}>
				<View style={{top: height/2.5}}>
					<TouchableOpacity onPress={()=>{this.onAuthorize()}} style={{width: width/1.5, backgroundColor: '#5baaf4', flexDirection: 'row', height: width/8, marginLeft: 60, }}>
						<Image source={require('./twitter.png')}  style={{width: 40, height: 40, padding: 3, marginLeft: 20}}/>
						<Text style={{color: '#fff', fontSize: 20, padding: 3, marginTop: 5}}>Login using Twitter</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
			)
	}

}
export default LoginScreen;
