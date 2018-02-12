import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppHeader, KeyButton, CapoButton, CapoKey } from '../components';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader headerText='Redux Keys' />
        <KeyButton />
        <CapoButton />
        <CapoKey />
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

export default MainScreen;
