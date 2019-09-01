import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-paper';

const Footer = ({ handlePress }) => {
  return (
    <View style={styles.container}>
      <Divider />
      <View style={styles.children}>
        <Text onPress={handlePress}>
          CRIAR CONTA
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  children: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
