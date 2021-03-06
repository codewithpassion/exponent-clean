/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class App extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>Open up main.js to start working on your app!</Text>
          </View>
        );
    }
}


Exponent.registerRootComponent(App);
