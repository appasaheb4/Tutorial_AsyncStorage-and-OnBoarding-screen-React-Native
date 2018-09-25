import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  Image,
  AsyncStorage
} from "react-native";
import {
  StackNavigator,
} from 'react-navigation';

import OnBoarding from './src/comp/OnBording';
import Login from './src/comp/Login'




const OnBoardingRoutes = StackNavigator({
  OnBoarding:
  {
    screen: OnBoarding,
    navigationOptions: {
      header: null,
    }
  },
  Login:
  {
    screen: Login,
    navigationOptions: { 
      header: null,
      gesturesEnabled: true,
    },

  },
},
  {
    initialRouteName: 'OnBoarding'  
  }
);


const LoginStack = StackNavigator({
  OnBoarding:
  {
    screen: OnBoarding,
    navigationOptions: {
      header: null,
    }   
  },
  Login:
  {
    screen: Login,
    navigationOptions: { 
      header: null,
      gesturesEnabled: true,
    },
  
  },
},
  {
    initialRouteName: 'Login'  
  }
);



//const video = new Videos();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      loadingPage: 'OnBoarding'
    }

  }


  componentWillMount() {
    this.retrieveData();
  }
  retrieveData = async () => {
    try {
      var value = await AsyncStorage.getItem('@onBoardingPageLoad:key');
      if (value == "login") {
        this.setState({
          loadingPage: 'Login'
        });
      }
      else {
        this.setState({
          loadingPage: 'OnBoarding'
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.loadingPage == "Login") {
      return (<LoginStack />);
    } 
    else {
      return (<OnBoardingRoutes />);
    }  
  }
}
