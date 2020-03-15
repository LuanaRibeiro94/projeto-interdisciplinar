import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import LembreteForm from '../../components/Forms/LembreteForm';

const LembreteFormScreen = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);
  const enviarFormulario = valores => {
    if (edit) {
      const { key } = navigation.getParam('initialValues');

      firebase.database().ref(`/lembretes/${key}`).set(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao alterar o lembrete'));
    } else {
      firebase.database().ref('lembretes').push(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao cadastrar o lembrete'));
    }
  };

  return (
    <View style={styles.container}>
      <LembreteForm
        enviarFormulario={enviarFormulario}
        initialValues={navigation.getParam('initialValues')}
        edit={edit}
      />
    </View>
  );
};

LembreteFormScreen.navigationOptions = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);

  return {
    title: edit ? 'Alteração de lembrete' : 'Cadastro de lembrete',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default LembreteFormScreen;
