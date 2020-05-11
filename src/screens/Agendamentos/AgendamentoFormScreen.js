import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import AgendamentoForm from '../../components/Forms/AgendamentoForm';

const AgendamentoFormScreen = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);
  const enviarFormulario = valores => {
    const userId = firebase.auth().currentUser.uid;

    if (edit) {
      const { key } = navigation.getParam('initialValues');

      firebase.database().ref('agendamentos').child(userId).child(key)
        .set(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao alterar o agendamento'));
    } else {
      firebase.database().ref('agendamentos').child(userId).push(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao cadastrar o agendamento'));
    }
  };

  return (
    <View style={styles.container}>
      <AgendamentoForm
        enviarFormulario={enviarFormulario}
        initialValues={navigation.getParam('initialValues')}
        edit={edit}
      />
    </View>
  );
};

AgendamentoFormScreen.navigationOptions = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);

  return {
    title: edit ? 'Alteração de agendamento' : 'Cadastro de agendamento',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default AgendamentoFormScreen;
