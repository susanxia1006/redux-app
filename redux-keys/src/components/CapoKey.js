import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';


class CapoKeyComp extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text h3>Capo Key</Text>
        <Text h1>{this.props.keys[this.props.capoKeyIndex].key}</Text>
      </View>

    );
  }
}

const mapStateToProps = state => (
  { keys: state.keys,
    capoKeyIndex: state.selections.capoKeyIndex }
);

const CapoKey = connect(mapStateToProps, {})(CapoKeyComp);

export default CapoKey;
