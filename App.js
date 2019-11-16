import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login'
import Start from './pages/Start';
import Signup from './pages/Signup';
import ForgotPwd from './pages/ForgotPwd';
import OtpVerify from './pages/OtpVerify';
import Home from './pages/Home';

export default class App extends React.Component {
  render() {
    const Routes = createStackNavigator({
      
      Start: {screen: Start},
      Login: {screen: Login},
      Signup: {screen: Signup},
      ForgotPwd: {screen: ForgotPwd},
      OtpVerify: {screen: OtpVerify},
      Home: {screen: Home},
    });
    
    const Root =  createAppContainer(Routes);
    return (
      <Root/>
    );
  }
}

