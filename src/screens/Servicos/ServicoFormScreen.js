import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import ServicoForm from '../../components/Forms/ServicoForm';

const ServicoFormScreen = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);
  const enviarFormulario = valores => {
    const userId = firebase.auth().currentUser.uid;

    if (edit) {
      const { key } = navigation.getParam('initialValues');

      firebase.database().ref('servicos').child(userId).child(key)
        .set(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao alterar o serviço'));
    } else {
      firebase.database().ref('servicos').child(userId).push(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao cadastrar o serviço'));
    }
  };

  return (
    <View style={styles.container}>
      <ServicoForm
        enviarFormulario={enviarFormulario}
        initialValues={navigation.getParam('initialValues')}
        edit={edit}
      />
    </View>
  );
};

ServicoFormScreen.navigationOptions = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);

  return {
    title: edit ? 'Alteração de serviço' : 'Cadastro de serviço',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default ServicoFormScreen;
