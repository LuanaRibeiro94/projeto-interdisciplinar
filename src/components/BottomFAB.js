import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const BottomFAB = props => {
  return <FAB style={styles.fab} {...props} />;
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default BottomFAB;
