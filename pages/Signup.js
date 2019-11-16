/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
  ToastAndroid,
  Picker
} from 'react-native';
import OtpVerify from './OtpVerify';

export default class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state={
            phone: '',
            password: ''
        }
    }

    loginPress = () =>{
        if(!this.state.phone){
            //alert('Please enter phone number')
            this._toastWithDurationGravityHandler('Please enter phone number')
        }else if(!this.state.password){
            alert('Please enter password')
        }else{
            this.props.navigation.navigate('List')
        }
    }

    _toastWithDurationGravityHandler=(msg)=>{
        //function to make Toast With Duration And Gravity
       ToastAndroid.showWithGravity(
          msg,
          ToastAndroid.SHORT, //can be SHORT, LONG
          ToastAndroid.CENTER //can be TOP, BOTTON, CENTER
        );
      }

    render() {
      return (
          <ScrollView>
        <View style={styles.container}>
            {/* <Image source={require('./Assets/download.png')} style={{width: 120, height: 100}}/> */}

            <TextInput
                style={styles.input_text}
                keyboardType={'default'}
                placeholder={'Full name'}
                placeholderTextColor={'#000'}
                onChangeText={text => { this.setState({ phone: text }) }}
            />

            <TextInput
                style={styles.input_text}
                keyboardType={'email-address'}
                placeholder={'Email'}
                placeholderTextColor={'#000'}
                onChangeText={text => { this.setState({ phone: text }) }}
            />

            <View style={styles.input_picker}>
            <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
            }>
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            </Picker>
            </View>

            <View style={styles.input_picker}>
            <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
            }>
            <Picker.Item label="Select country" value="" />
            <Picker.Item label="India" value="india" />
            <Picker.Item label="United State" value="us" />
            </Picker>
            </View>

            <TextInput
                style={styles.input_text}
                keyboardType={'number-pad'}
                placeholder={'Phone number'}
                placeholderTextColor={'#000'}
                onChangeText={text => { this.setState({ phone: text }) }}
            />

            <TextInput
                style={styles.input_text}
                placeholder={'Password'}
                secureTextEntry={true}
                placeholderTextColor={'#000'}
                onChangeText={text => { this.setState({ password: text }) }}
            />

            <TextInput
                style={styles.input_text}
                placeholder={'Confirm Password'}
                secureTextEntry={true}
                placeholderTextColor={'#000'}
                onChangeText={text => { this.setState({ password: text }) }}
            />

            <TouchableOpacity 
            style={styles.signin_btn} 
            onPress={() => this.props.navigation.navigate('OtpVerify')}>
                <Text style={{color: '#fff', alignSelf: 'center', paddingTop: 12, fontSize: 16}}>Sign up</Text>
            </TouchableOpacity>

            <Text style={{color: '#000', alignSelf: 'center', paddingTop: 8, fontSize: 20, fontWeight:'bold', marginTop:30}}>────────    Or With   ────────</Text>
            <View style={{
                flex: 1,
                flexDirection: 'row',
            }}>
                <TouchableOpacity style={styles.forgot_btn} onPress={() => this.props.navigation.navigate('Signup')}>
                <Image source={require('./Assets/download.png')} style={{width: 120, height: 100}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgot_btn} onPress={() => this.props.navigation.navigate('Signup')}>
                <Image source={require('./Assets/download.png')} style={{width: 120, height: 100}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgot_btn} onPress={() => this.props.navigation.navigate('Signup')}>
                <Image source={require('./Assets/download.png')} style={{width: 120, height: 100}}/>
                </TouchableOpacity>
            </View>

            
        </View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      marginHorizontal: 30,
    },
    input_text : {
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        width: '100%',
        borderRadius:20,
        paddingLeft: 16,
        marginTop:20
    },
    input_picker:{
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        width: '100%',
        borderRadius:20,
        paddingLeft: 5,
        marginTop:20
    },
    signin_btn: {
        borderRadius:20,
        height:50,
        width:'100%',
        marginTop:20,
        backgroundColor:'#000'
    },
});

