import React from 'react';
import { HelperText } from 'react-native-paper';

const ErrorText = ({ children }) => {
  return <HelperText type="error">{children}</HelperText>;
};

export default ErrorText;
