import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image, TouchableOpacity, Alert, } from "react-native";
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
    backgroundColor: 'red'
  }
})


export default class clockApp extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            time: moment().format("LTS"),
            timeType : true,
            colorType : true,
            showCancel: true,
        };
    }

    render() {
         setTimeout(() => {
             this.setState({
                 time: this.state.timeType ? moment().format("LTS"): moment().format("HH:mm:ss")
             });
         }, 1000);

        return (
              <View style={styles.container}>
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
              </View>
        )
    }
}
