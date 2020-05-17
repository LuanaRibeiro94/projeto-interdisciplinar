import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Title } from 'react-native-paper';

const Home = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Seja bem-vindo.</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#00CED1',
  },
});

export default Home;
