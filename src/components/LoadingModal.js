import React from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, Modal } from 'react-native-paper';
import PropTypes from 'prop-types';

const LoadingModal = ({ visible }) => {
  return (
    <Modal visible={visible} contentContainerStyle={styles.modal}>
      <ActivityIndicator size="large" />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'white',
  },
});

LoadingModal.propTypes = {
  visible: PropTypes.bool,
};

LoadingModal.defaultProps = {
  visible: false,
};

export default LoadingModal;
