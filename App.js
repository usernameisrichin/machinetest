/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import StacksOverTabs from './navigator'
const AppContainer = createAppContainer(StacksOverTabs);


class App extends React.Component{
  render(){
    return(
        <AppContainer />
      )
  }
}

export default App;
