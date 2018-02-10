import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { AppHeader } from './src/components';
import Store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <AppHeader headerText='Redux Keys' />
        </View>
      </Provider>
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
