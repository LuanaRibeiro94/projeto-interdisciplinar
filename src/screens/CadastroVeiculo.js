import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import VeiculoForm from '../components/Forms/VeiculoForm';

const CadastroVeiculo = ({ navigation }) => {
  const enviarFormulario = valores => {
    firebase.database().ref('veiculos').push(valores)
      .then(() => navigation.goBack())
      .catch(() => console.log('Ocorreu algum erro ao cadastrar o veículo'));
  };

  return (
    <View style={styles.container}>
      <VeiculoForm
        enviarFormulario={enviarFormulario}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default CadastroVeiculo;
