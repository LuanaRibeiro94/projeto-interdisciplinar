import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const Home = props => {
  const { navigation: { navigate } } = props;

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Button mode="contained" onPress={() => { navigate('CadastroCliente'); }}>
        Cadastrar Cliente
      </Button>

      <Button mode="contained" onPress={() => { navigate('CadastroVeiculo'); }} style={{ marginTop: 15 }}>
        Cadastrar Veículo
      </Button>

    </View>
  );
};

export default Home;
