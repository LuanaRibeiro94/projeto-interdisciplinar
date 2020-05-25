import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, Text, Colors } from 'react-native-paper';

const Footer = ({ handlePress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Não possui uma conta?
      </Text>
      <Divider />
      <View style={styles.children}>
        <Text onPress={handlePress} style={styles.text}>
          CADASTRE-SE
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
  title: {
    alignSelf: 'center',
    color: Colors.grey700,
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.grey700,
  },
});

export default Footer;
