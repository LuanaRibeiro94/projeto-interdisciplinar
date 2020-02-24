import React from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import DespesaForm from '../../components/Forms/DespesaForm';

const DespesaFormScreen = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);
  const enviarFormulario = valores => {
    if (edit) {
      const { key } = navigation.getParam('initialValues');

      firebase.database().ref(`/despesas/${key}`).set(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao alterar a despesa'));
    } else {
      firebase.database().ref('despesas').push(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao cadastrar a despesa'));
    }
  };

  return (
    <View style={styles.container}>
      <DespesaForm
        enviarFormulario={enviarFormulario}
        initialValues={navigation.getParam('initialValues')}
        edit={edit}
      />
    </View>
  );
};

DespesaFormScreen.navigationOptions = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);

  return {
    title: edit ? 'Alteração de despesa' : 'Cadastro de despesa',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default DespesaFormScreen;
