import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Navi from './navi';
import { createStackNavigator } from 'react-navigation';
import ClockApp from './clock'

class reactNavigationSample extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  render(){
    const { navigation } = this.props;

    return (
      <Navi navigation={ navigation }/>
    );
  }
}

export default createStackNavigator({
  Home: { screen: reactNavigationSample },
  ClockApp: { screen: ClockApp, title: 'ss' },
});
