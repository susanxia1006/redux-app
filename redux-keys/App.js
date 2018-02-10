import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppHeader } from './src/components';
import { KeyReducer } from './src/reducers';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader headerText='Redux Keys' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
