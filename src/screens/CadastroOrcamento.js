import React from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import OrcamentoForm from '../components/Forms/OrcamentoForm';

const CadastroOrcamento = ({ navigation }) => {
  const enviarFormulario = valores => {
    firebase.database().ref('orçamentos').push(valores)
      .then(() => navigation.goBack())
      .catch(() => console.log('Ocorreu algum erro ao cadastrar o orçamento'));
  };

  return (
    <View style={styles.container}>
      <OrcamentoForm enviarFormulario={enviarFormulario} />
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

export default CadastroOrcamento;
