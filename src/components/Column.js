import React from 'react';
import { View, StyleSheet } from 'react-native';

const Column = ({ children }) => (
  <View style={styles.column}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
});

export default Column;
