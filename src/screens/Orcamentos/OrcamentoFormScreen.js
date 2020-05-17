import React from 'react';
import { StyleSheet, View } from 'react-native';
import OrcamentoForm from '../../components/Forms/OrcamentoForm';
import { criarOrcamento, editarOrcamento } from '../../services/firebase/orcamentos';

const OrcamentoFormScreen = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);
  const enviarFormulario = valores => {
    if (edit) {
      const { key } = navigation.getParam('initialValues');

      editarOrcamento(key, valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao alterar o orçamento'));
    } else {
      criarOrcamento(valores)
        .then(() => navigation.goBack())
        .catch(() => console.log('Ocorreu algum erro ao cadastrar o orçamento'));
    }
  };

  return (
    <View style={styles.container}>
      <OrcamentoForm
        enviarFormulario={enviarFormulario}
        initialValues={navigation.getParam('initialValues')}
        edit={edit}
      />
    </View>
  );
};

OrcamentoFormScreen.navigationOptions = ({ navigation }) => {
  const edit = navigation.getParam('edit', false);

  return {
    title: edit ? 'Alteração de orçamento' : 'Cadastro de orçamento',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default OrcamentoFormScreen;
