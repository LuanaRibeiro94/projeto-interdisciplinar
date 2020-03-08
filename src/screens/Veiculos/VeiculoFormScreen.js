import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import VeiculoForm from '../../components/Forms/VeiculoForm';

const VeiculoFormScreen = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);
  const enviarFormulario = valores => {
    const userId = firebase.auth().currentUser.uid;

    if (edit) {
      const { key } = navigation.getParam('initialValues');

      firebase.database().ref('veiculos').child(userId).child(key)
        .set(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao alterar o veículo'));
    } else {
      firebase.database().ref('veiculos').child(userId).push(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao cadastrar o veículo'));
    }
  };

  return (
    <View style={styles.container}>
      <VeiculoForm
        enviarFormulario={enviarFormulario}
        initialValues={navigation.getParam('initialValues')}
        edit={edit}
      />
    </View>
  );
};

VeiculoFormScreen.navigationOptions = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);

  return {
    title: edit ? 'Alteração de veículo' : 'Cadastro de veículo',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default VeiculoFormScreen;
