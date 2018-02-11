import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { AppHeader, KeyButton, CapoButton, CapoKey } from './src/components';
import Store from './src/store';

//import { SelectKey, SelectCapo } from './src/actions';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <AppHeader headerText='Redux Keys' />
          <KeyButton />
          <CapoButton />
          <CapoKey />
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
