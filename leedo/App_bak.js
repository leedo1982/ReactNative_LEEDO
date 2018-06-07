import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Navi from './navi';
import { createStackNavigator, TabNavigator } from 'react-navigation';
import ClockApp from './clock'
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'

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

export const Tabs = TabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: TabC },
}, {
  order: ['TabA', 'TabB', 'TabC']
})
