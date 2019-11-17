import React, { Component } from 'react';
import {TextInput, View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image, FlatList} from 'react-native';
import { Icon } from 'native-base';

var {height, width} = Dimensions.get('window');
const MAX_RESULT = 15; 
const PLAYLIST_ID = "PLBCF2DAC6FFB574DE"; 
const API_KEY = "";

class HomeScreen extends React.Component{
	static navigationOptions = {
	    title: 'List',
	  };
	constructor(props){
		super(props)
		this.state={videos: '',}
	}
	componentDidMount(){
		this.fetchPlaylistData();
	}
	async fetchPlaylistData(){
	    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`);
	    const json = await response.json();
	    this.setState({ videos: json['items']});
	    console.log(this.state.videos)
	  }
	watchVideo(video_url){
    this.props.navigation.navigate('Video',{video_url: video_url});
  	}  

	render() {
	    const videos = this.state.videos;
	    return (
	      <SafeAreaView style={styles.safeArea}>
	            <FlatList
	              data={this.state.videos}
	              keyExtractor={(_, index) => index.toString()}
	              renderItem={
	                ({item}) => 
	                <TouchableOpacity
	                    style={styles.demacate}
	                    onPress={() => this.watchVideo(item.contentDetails.videoId)}
	                >
	                <Image source={{uri: item.snippet.thumbnails.default}} style={{width: item.snippet.thumbnails.width, height: item.snippet.thumbnails.height}}/>
	                <Text 
	                  style={styles.item} 
	                > 
	                {item.snippet.title} 
	                </Text>
	                </TouchableOpacity>
	              }
	            />
	      </SafeAreaView>
	    );
	  }

}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  demacate: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    borderRadius:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  },
});
export default HomeScreen;
