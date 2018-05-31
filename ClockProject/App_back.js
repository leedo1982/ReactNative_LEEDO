import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    StatusBar,
    Image
} from "react-native";

import moment from "moment";

let randomHex = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: randomHex()
    },
    up: {
        flex: 1,
        backgroundColor: randomHex()
    },
    middle: {
        flex: 1,
        backgroundColor: randomHex()
    },
    down: {
        flex: 1,
        backgroundColor: randomHex()
    },
    timeText: {
        color: '#999999',
        fontSize: 50,
    },
})

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class ClockApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: moment().format("LTS"),
            timeType : true,
            colorType : true,
            backgroundColor: randomHex()
        };
    }
    render() {
         setTimeout(() => {
             this.setState({
                 time: this.state.timeType ? moment().format("LTS"): moment().format("HH:mm:ss")
             });
         }, 1000);

        return (
            <View style={[styles.container, {backgroundColor: this.state.backgroundColor}] }>
                <View style={styles.up} >
                    <Image source={require('./img/my-icon.png')} style={{width: 30, height: 30}} />
                </View>
                <View style={styles.middle} >
                    <StatusBar style={ {backgroundColor: 'transparent'}} />
                    <Text style={styles.timeText}>
                    {this.state.time}
                    </Text>
                    <Button
                    onPress={()=> this.setState({timeType: !this.state.timeType})}
                    title="time type change"
                    />
                    <Button
                    onPress={() =>this.setState({backgroundColor: randomHex()})}
                    title="background change"
                    />
                </View>
                <View style={styles.down}/>
            </View>
        )
    }
}
