import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet, Button, View , Animated } from 'react-native'

export default class AlertApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
        };
    }
    _action = (param) => {
        this.props.action(param)
    }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 5000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }


    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center',opacity: fadeAnim }}>
                <View>
                    <TouchableOpacity onPress = {() => this._action('red')} style = {[styles.button, styles.red]} />
                    <TouchableOpacity onPress = {() => this._action('blue')} style = {[styles.button, styles.blue]} />
                    <TouchableOpacity onPress = {() => this._action('black')} style = {[styles.button, styles.black]} />
                </View>
                <View>
                    <TouchableOpacity onPress = {() => this._action('yellow')} style = {[styles.button, styles.yellow]} />
                    <TouchableOpacity onPress = {() => this._action('pink')} style = {[styles.button, styles.pink]} />
                    <TouchableOpacity onPress = {() => this._action('white')} style = {[styles.button, styles.white]} />
                </View>
                <View>
                    <TouchableOpacity onPress = {() => this._action('coral')} style = {[styles.button, styles.coral]} />
                    <TouchableOpacity onPress = {() => this._action('darkblue')} style = {[styles.button, styles.darkblue]} />
                    <TouchableOpacity onPress = {() => this._action('cyan')} style = {[styles.button, styles.cyan]} />
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create ({
    button: {
        width: 50,
        height: 50,
        borderRadius: 80,
        alignItems: 'center',
        marginTop: 1
    },
    red: { backgroundColor: 'red' },
    blue: { backgroundColor: 'blue' },
    black: { backgroundColor: 'black' },
    yellow: { backgroundColor: 'yellow' },
    pink: { backgroundColor: 'pink' },
    white: { backgroundColor: 'white' },
    coral: { backgroundColor: 'coral' },
    darkblue: { backgroundColor: 'darkblue' },
    cyan: { backgroundColor: 'cyan' },
})
