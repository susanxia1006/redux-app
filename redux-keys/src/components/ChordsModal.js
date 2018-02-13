import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { OpenChords, CloseChords } from '../actions';

class ChordsModalComp extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Modal
              visible={this.props.modalOpen}
              animationType={'slide'}
              onRequestClose={this.props.closeModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>This is content inside of modal component</Text>
                <Button
                    onPress={this.props.closeModal}
                    title="Close modal"
                />
              </View>
            </View>
          </Modal>
          <Button
              onPress={this.props.openModal}
              title="Open modal"
          />
        </View>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.toggle.modalOpen
});

const mapDispatchToProps = dispatch => ({
  openModal: () => {
    dispatch(OpenChords());
  },
  closeModal: () => {
    dispatch(CloseChords());
  }
});

const ChordsModal = connect(mapStateToProps, mapDispatchToProps)(ChordsModalComp);

export default ChordsModal;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
