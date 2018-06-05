import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, 
    StatusBar, Image, TouchableOpacity, Alert, Animated,
} from "react-native";
import Alertview from './Alertview.js'
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
        flexDirection: 'column',
        backgroundColor: 'blue'
    },
    top: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: { flex: 1, },

    timeText: {
        color: '#999999',
        fontSize: 50,
    },
})

export default class ClockApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format("LTS"),
            timeType : true,
            colorType : true,
            backgroundColor: randomHex(),
            showCancel: false,
        };
    }

    _action = (color) => {
        this.setState({
            backgroundColor: color,
            showCancel: !this.state.showCancel
        });
    }

    render() {
        setTimeout(() => {
            this.setState({
                time: this.state.timeType ? moment().format("LTS"): moment().format("HH:mm:ss")
            });
        }, 1000);

        return (
            <View style={[styles.container, {backgroundColor: this.state.backgroundColor}] }>
                <View style={styles.top}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ ()=> this.setState({showCancel: !this.state.showCancel}) }>
                    <Image source={require('./img/my-icon.png')} style={{width: 50, height: 50}} />
                    </TouchableOpacity>
                    {this.state.showCancel ? <Alertview action = {this._action}/> : null}

                </View>
                <View style={styles.middle}>
                    <StatusBar style={ {backgroundColor: 'transparent'}} />
                    <Text style={styles.timeText}>
                    {this.state.time}
                    </Text>
                    <Button onPress={()=> this.setState({timeType: !this.state.timeType})} title="time type change" />
                    <Button onPress={() =>this.setState({backgroundColor: randomHex()})} title="background change"
                    />
                </View>
                <View style={styles.bottom}>
                </View>
            </View>
        )
    }
}
