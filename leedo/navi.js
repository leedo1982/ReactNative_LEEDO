import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Navi = (props)  => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native Navigation !
      </Text>
      <Button
          onPress={() => navigate('ClockApp')}
          title="Go to Clock"
        />
    </View>
  );
}

export default Navi 
