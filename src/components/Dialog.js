import React from 'react';
import {
  Dialog, Portal, Paragraph, Button,
} from 'react-native-paper';
import PropTypes from 'prop-types';

const AlertDialog = ({
  visible, onDismiss, title, content, onConfirm,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{content}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Cancelar</Button>
          <Button onPress={onConfirm}>Apagar</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

AlertDialog.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

AlertDialog.defaultProps = {
  visible: false,
};

export default AlertDialog;
