import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar, Colors, Title, Subheading,
} from 'react-native-paper';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={require('../../assets/relogio.png')}
        size={100}
        style={styles.avatar}
      />
      <Title style={styles.title}>Nenhum lembrete encontrado</Title>
      <Subheading>Por favor utilize o botão de adicionar para incluir um lembrete</Subheading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: Colors.white,
  },
  title: {
    color: '#00CED1',
    fontWeight: 'bold',
  },
});

export default EmptyState;
