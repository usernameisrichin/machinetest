import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FormInput from './form'
import LoginScreen from './login'
import HomeScreen from './home'
import VideoScreen from './video'
 

 const StacksOverTabs = createStackNavigator(
	{
		Login: {
			screen: LoginScreen
		},
		Form: {
			screen:FormInput
		},
		Home: {
			screen:HomeScreen
		},
		Video: {
			screen:VideoScreen
		},
  		
  },
)

export default createAppContainer(StacksOverTabs); 
