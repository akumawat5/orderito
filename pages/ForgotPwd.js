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
} from 'react-native';


export default class ForgotPwd extends React.Component {
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
        <View style={styles.container}>
            <Image source={require('./Assets/download.png')} style={{width: 120, height: 100}}/>

            
            <TextInput
                style={styles.input_text}
                keyboardType={'email-address'}
                placeholder={'User Email'}
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

            <TouchableOpacity 
            style={styles.signin_btn} 
            onPress={() => this.loginPress()}>
                <Text style={{color: '#fff', alignSelf: 'center', paddingTop: 12, fontSize: 16}}>Sign in</Text>
            </TouchableOpacity>

            
        </View>
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
    signin_btn: {
        borderRadius:20,
        height:50,
        width:'100%',
        marginTop:20,
        backgroundColor:'#000'
    },
});

