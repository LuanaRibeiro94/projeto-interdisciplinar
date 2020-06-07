import React from 'react';
import {
  KeyboardAvoidingView as CoreKeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Header } from 'react-navigation-stack';
import PropTypes from 'prop-types';

const KeyboardAvoidingView = ({ children, ...rest }) => {
  return (
    <CoreKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Header.HEIGHT}
      {...rest}
    >
      {children}
    </CoreKeyboardAvoidingView>
  );
};

KeyboardAvoidingView.propTypes = {
  children: PropTypes.node,
};

KeyboardAvoidingView.defaultProps = {
  children: null,
};

export default KeyboardAvoidingView;
