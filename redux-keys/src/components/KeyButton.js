import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { SelectKey } from '../actions';

//const SCREEN_WIDTH = Dimensions.get('window').width;

class KeyButtonComp extends Component {

  render() {
    const keys = this.props.keys;
    const buttons = keys.map(key => (key.shortKey ? '/' : [key.key]));
    const { selectedKeyIndex, updateIndex } = this.props;

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text h3>Key</Text>
        <Text h1>{keys[selectedKeyIndex].key}</Text>
        <ButtonGroup
          selectedIndex={selectedKeyIndex}
          onPress={updateIndex}
          containerStyle={styles.containerStyle}
          buttons={buttons}
        />
      </View>

    );
  }
}

const styles = {
  containerStyle: {
    height: 40,
    width: 300
  }
};

const mapStateToProps = state => ({
  keys: state.keys,
  selectedKeyIndex: state.selections.selectedKeyIndex
});

const mapDispatchToProps = dispatch => ({
  updateIndex: (index) => {
    dispatch(SelectKey(index));
  }

});


const KeyButton = connect(mapStateToProps, mapDispatchToProps)(KeyButtonComp);
export default KeyButton;
