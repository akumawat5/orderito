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
  Modal,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-ionicons'
import Login from './Login';
import Signup from './Signup';
import ForgotPwd from './ForgotPwd';

export default class Start extends React.Component {
    state = {
        modalVisible: false,
      };
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render() {
      return (
        <View style={styles.container}>
          
            <Image source={require('./Assets/download.png')} style={{width: 120, height: 100}}/>
            <TouchableOpacity style={styles.signup_btn} onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={{color: '#fff', alignSelf: 'center', paddingTop: 12, fontSize: 18}}>Sign Up now!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signin_btn} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{color: '#000', alignSelf: 'center', paddingTop: 12, fontSize: 18}}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgot_btn} onPress={() => {this.setModalVisible(true);}}>
                <Text style={{color: '#000', alignSelf: 'center', paddingTop: 8, fontSize: 16}}>Forgot Password ?</Text>
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

            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.container}>
                <View>
                <TouchableHighlight
                    onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Icon name="close" style={styles.close_icon}/>
                </TouchableHighlight>
                </View>

                <Image source={require('./Assets/download.png')} style={{width: 120, height: 100}}/>
                    <Text style={{fontSize:25, fontWeight:'bold', paddingTop:20}}>Forgot</Text>
                    <Text style={{fontSize:25, fontWeight:'bold'}}>Your Password</Text>

                    <Text style={styles.desc_text}>Enter your email below  to receive the instructions to reset your password</Text>
                    
                    <TextInput
                      style={{width: '100%', height: 50, textAlign:'center', fontSize:20 }}
                      keyboardType={'email-address'}
                      placeholder={'Enter your email'}
                      placeholderTextColor={'#000'}
                      onChangeText={text => { this.setState({ phone: text }) }}
                  />

                    <TouchableOpacity style={styles.send_pwd_btn} onPress={() => this.props.navigation.navigate('Signup')}>
                      <Text style={{color: '#fff', alignSelf: 'center', paddingTop: 12, fontSize: 18}}>Send Password</Text>
                  </TouchableOpacity>
                      
            </View>
            </Modal>
        </View>

        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      marginHorizontal: 16,
    },
    signup_btn: {
      borderRadius:20,
      height:50,
      width:'100%',
      marginTop:100,
      backgroundColor:'#000'
    },
    signin_btn: {
      borderRadius:20,
      height:50,
      width:'100%',
      borderWidth: 2,
      marginTop:20
    },
    forgot_btn: {

    },
    left_line:{
        height:3,
        width:50,
        backgroundColor:'#000',
        flex:1,
        display:"flex"
    },
    close_icon:{
      fontSize:50,
      width:'100%'
    },
    desc_text:{
      textAlign:'center',
      fontSize:20,
      padding:30
    },
    send_pwd_btn:{
      borderRadius:20,
      height:50,
      width:'100%',
      marginTop:20,
      backgroundColor:'#000'
    }
});