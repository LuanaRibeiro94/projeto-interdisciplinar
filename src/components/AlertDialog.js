import React from 'react';
import {
  Dialog, Portal, Paragraph,
} from 'react-native-paper';
import PropTypes from 'prop-types';

const AlertDialog = ({
  visible, onDismiss, title, content, acoes,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{content}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          {acoes}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

AlertDialog.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  acoes: PropTypes.node.isRequired,
};

AlertDialog.defaultProps = {
  visible: false,
  content: '',
};

export default AlertDialog;
