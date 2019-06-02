import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Colors, Title, Subheading } from 'react-native-paper';

const Home = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={require('../assets/truck.png')}
        size={100}
        style={styles.avatar}
      />
      <Title>Nenhum veículo encontrado.</Title>
      <Subheading>Por favor use o botão de menu para inserir um novo.</Subheading>
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
  avatar: {
    backgroundColor: Colors.grey200,
  },
});

export default Home;
