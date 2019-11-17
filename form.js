import React, { Component } from 'react';
import {TextInput, View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'native-base';

var {height, width} = Dimensions.get('window');

class FormInput extends React.Component{
	static navigationOptions = {
	    title: 'Form',
	  };
	constructor(props){
		super(props)
		this.state={
			name: '',
			age: '',
			hobbies: '',
			description: '',
			image_file: '',
		}
	}
	openGallery(){
		console.log('OPEN GALLERY METHOD');
		ImagePicker.openPicker({
		  width: 300,
		  height: 400,
		  cropping: true
		}).then(image => {
		  this.setState({image_file: image});
		});
	}
	render(){
		return(
			<SafeAreaView style={styles.container}>
				<View>
	                <Text style={styles.topicheader}>Name </Text>
	                <View style={ styles.viewstyle }>
	                  <TextInput  style={styles.inputBox}
				                  returnKeyType="go"
				                  autoFocus={false}
				                  onChangeText={(name) => this.setState({name})}
				                  placeholder="Enter Name"
				                  placeholderTextColor='#f2f2f2'/>
	                </View>
              </View>
              <View>
	                <Text style={styles.topicheader}>Age </Text>
	                <View style={ styles.viewstyle }>
	                  <TextInput  style={styles.inputBox}
				                  returnKeyType="go"
				                  autoFocus={false}
				                  onChangeText={(age) => this.setState({age})}
				                  placeholder="Enter Age"
				                  placeholderTextColor='#f2f2f2'/>
	                </View>
              </View>
              <View>
	                <Text style={styles.topicheader}>Hobby </Text>
	                <View style={ styles.viewstyle }>
	                  <TextInput  style={styles.inputBox}
				                  returnKeyType="go"
				                  autoFocus={false}
				                  onChangeText={(hobbies) => this.setState({hobbies})}
				                  placeholder="Enter Hobby"
				                  placeholderTextColor='#f2f2f2'/>
	                </View>
              </View>
              <View>
	                <Text style={styles.topicheader}>Self Description </Text>
	                <View style={ styles.viewstyle }>
	                  <TextInput  style={styles.inputBox}
				                  returnKeyType="go"
				                  autoFocus={false}
				                  onChangeText={(description) => this.setState({description})}
				                  placeholder="Enter Description"
				                  placeholderTextColor='#f2f2f2'/>
	                </View>
              </View>
              <View style={{backgroundColor: '#f2f2f2' , 
              				alignItems:'center',
              				justifyContent:'center', 
              				marginLeft: 10, 
              				marginRight: 10, 
              				marginTop: 6}}>
              		<TouchableOpacity onPress={() =>this.openGallery()}>
            		<Text style={styles.pickertext}>Upload</Text>
	                  <View style={styles.pickericonview}>
	                    <View style={{margin:10,borderColor:'#11137C'}}>
	                      <Icon name={'ios-folder-open-outline'} style={styles.pickericon}/>
	                    </View>
	                  </View>
              		</TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}
                  style={[styles.applybutton,{backgroundColor:'#FDD60B', width: width/2.7, padding: 10, }] }>
                  <Text style={styles.applytext}>
                   NEXT
                  </Text>
               </TouchableOpacity>
			</SafeAreaView>
			)
	}
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  topicheader:{
	  color:'#000000', 
	  fontSize: 16,
	  fontFamily: 'Din Condensed',
	  textAlign: 'center',
	  marginTop: 3
   },
   viewstyle: {
      height: height/20,
      backgroundColor: 'white',
       marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignSelf: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#000000',
      marginTop: 3,
      width: width/1.1
}, 
 inputBox: {                                
    color: '#000000',
    fontSize: 18,
    textAlignVertical: 'top',
    textAlign: 'left',
    fontFamily: 'Din Condensed',
    padding: 7,
    marginLeft: 10,
    paddingBottom: 6,
    textAlign: 'center'
  },
  pickericonview:{
    backgroundColor:'#FFFFFF',
    margin:20,
    height: 60,
    width:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
  },
  pickertext:{
    fontSize: 16,
    textAlign:'center',
    color:'#11137C',
    fontFamily:'Din Condensed',
    marginTop: 4

  },
  pickericon:{
    fontSize: 40,
    color:'#11137C',
  },
  applytext:{
    color:'#11137C',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '300',
    fontFamily: 'Din Condensed',
    textShadowColor: '#FEF4BD',
    textShadowOffset: {width: 1, height: 2},},
  applybutton:{
      flex: 0,
      flexDirection : 'row',
      justifyContent: 'center',
      borderColor: '#FDD60B',
      borderWidth: 1,
      margin:5,
      marginTop:30,
      marginBottom:60,
      padding:5,
      minWidth:100,
      borderRadius:30,
      alignSelf: 'center',
    },
});
export default FormInput;
