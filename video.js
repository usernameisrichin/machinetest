import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, WebView, Dimensions } from 'react-native';
import { Icon } from 'native-base';

var {height, width} = Dimensions.get('window');

class VideoScreen extends React.Component{
	constructor(props) {
        super(props);
        this.state ={
        	id: props.navigation.state.params.video_url,
        }
        console.log(this.props);
      }
	render() {
        return (
          <SafeAreaView style={styles.safeArea}>
              { 
                <WebView
                  source={{ uri: "https://www.youtube.com/embed/"+this.state.id}}
                  startInLoadingState={true} 
                />
              }
          </SafeAreaView>
        );
      }
    }
    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
        backgroundColor: '#fff'
      }
    });
export default VideoScreen;
