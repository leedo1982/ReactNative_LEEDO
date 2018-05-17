import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    StatusBar,
} from "react-native";

import moment from "moment";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
            colorType : true

        };
    }
    render() {
         setTimeout(() => {
             this.setState({
                 time: this.state.timeType ? moment().format("LTS"): moment().format("HH:mm:ss")
             });
         }, 1000);

        return (
            <View style={this.state.colorType ? {backgroundColor:'black'}:{backgroundColor:'blue'}, styles.container }>
                <StatusBar style={ {backgroundColor: 'transparent'}} />
                <Text style={styles.timeText}>
                    {this.state.time}
                </Text>
            <Button
            onPress={()=> this.setState({timeType: !this.state.timeType})}
            title="time type change"
            />
            <Button
            onPress={()=> this.setState({colorType: !this.state.colorType})}
            title="background change"
            />
            </View>
        )
    }
}
