import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LoginScreen from './screens/Login';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen : {screen : LoginScreen},
  Drawer : {screen : AppDrawerNavigator},
})

const AppContainer = createAppContainer(SwitchNavigator);
