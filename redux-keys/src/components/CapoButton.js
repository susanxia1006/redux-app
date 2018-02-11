import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { SelectCapo } from '../actions';

//const SCREEN_WIDTH = Dimensions.get('window').width;

class CapoButtonComp extends Component {

  render() {
    //const keys = this.props.keys;
    const buttons = Array.from(new Array(11), (x, i) => i + 1);
    const { selectedCapoIndex, updateIndex } = this.props;

    return (
      <View>
        <Text h1>Capo</Text>
        <Text h2>{selectedCapoIndex + 1}</Text>
        <ButtonGroup
          selectedIndex={selectedCapoIndex}
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
  //keys: state.keys,
  selectedCapoIndex: state.selections.selectedCapoIndex
});

const mapDispatchToProps = dispatch => {
  return {
    updateIndex: (index) => {
      dispatch(SelectCapo(index));
    }

  };
};

const CapoButton = connect(mapStateToProps, mapDispatchToProps)(CapoButtonComp);
export default CapoButton;
