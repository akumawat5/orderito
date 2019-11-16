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
  TouchableHighlight ,
  FlatList, ActivityIndicator, Platform
} from 'react-native';
import Icon from 'react-native-ionicons'
import { SearchBar } from 'react-native-elements';

import Login from './Login';
import Signup from './Signup';
import ForgotPwd from './ForgotPwd';

export default class Start extends React.Component {
  
      constructor(props) {
        super(props);
        //setting default state
        this.state = { isLoading: true, search: '' };
        this.arrayholder = [];
      }
    
      componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(responseJson => {
            this.setState(
              {
                isLoading: false,
                dataSource: responseJson,
              },
              function() {
                this.arrayholder = responseJson;
              }
            );
          })
          .catch(error => {
            console.error(error);
          });
      }
      search = text => {
        console.log(text);
      };
      clear = () => {
        this.search.clear();
      };
      SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.arrayholder.filter(function(item) {
          //applying filter for the inserted text in search bar
          const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          dataSource: newData,
          search:text,
        });
      }
      ListViewItemSeparator = () => {
        //Item sparator view
        return (
          <View
            style={{
              height: 0.3,
              width: '90%',
              backgroundColor: '#080808',
            }}
          />
        );
      };

       //Navigation option to create menu in header
       static navigationOptions = ({ navigation }) => {
        return {
          //Heading/title of the header
          title: navigation.getParam('Title', 'Select Your Food'),
          //Heading style
          headerStyle: {
            backgroundColor: navigation.getParam('BackgroundColor', 'black'),
            textAlign: 'center',
            
          },
          headerTitleStyle:{ textAlign: 'center', width:'100%'},
          
          //Heading text color
          headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
          headerRight: (
            <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor:'gray',
                  borderRadius:20,
                  padding:10,
                  paddingHorizontal:20
                
                }}>
                Filter
              </Text>
            </TouchableOpacity>
          ),
          headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('FirstPage')}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor:'gray',
                  borderRadius:20,
                  padding:10
                }}>
                Switch Table
              </Text>
            </TouchableOpacity>
          ),
        };
      };

    render() {
      if (this.state.isLoading) {
        //Loading View while data is loading
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <ActivityIndicator />
          </View>
        );
      }
      return (
        <View style={styles.viewStyle}>
          <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          />
          <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <Text style={styles.textStyle}>{item.title}</Text>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
           
           
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
    viewStyle: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor:'white',
      marginTop: Platform.OS == 'ios'? 30 : 0
    },
    textStyle: {
      padding: 10,
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