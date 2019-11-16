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
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default class OtpVerify extends React.Component {
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

            <Text style={styles.desc_text}>OTP has been sent to you on your mobile phone. Please enter it below.</Text>

            <OTPInputView
                style={{width: '80%', height: 200}}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />

            <TouchableOpacity 
            style={styles.signin_btn} 
            onPress={() => this.loginPress()}>
                <Text style={{color: '#fff', alignSelf: 'center', paddingTop: 12, fontSize: 16}}>VERIFY</Text>
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
    signin_btn: {
        borderRadius:20,
        height:50,
        width:'100%',
        marginTop:20,
        backgroundColor:'#000'
    },
    desc_text:{
        textAlign:'center',
        fontSize:20,
        padding:30
      },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "black",
      },
    
      underlineStyleHighLighted: {
        borderColor: "black",
      },

      borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "black",
      },
    
});

