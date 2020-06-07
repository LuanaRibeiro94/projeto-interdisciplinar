import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import PessoaFisicaForm from '../components/Forms/PessoaFisicaForm';
import PessoaJuridicaForm from '../components/Forms/PessoaJuridicaForm';
import KeyboardAvoidingView from '../components/KeyboardAvoidingView';
import AlertDialog from '../components/AlertDialog';
import { criarUsuario, gerarMensagemDeErro } from '../services/firebase/usuarios';

const CadastroCliente = ({ navigation }) => {
  const [tipoPessoa, setTipoPessoa] = useState('pf');
  const [dialog, setDialog] = useState({ visivel: false, mensagem: '' });
  const Form = tipoPessoa === 'pf' ? PessoaFisicaForm : PessoaJuridicaForm;

  const enviarFormulario = (valores, formikBag) => {
    criarUsuario(valores)
      .then(() => navigation.navigate('App'))
      .catch(erro => {
        setDialog({ visivel: true, mensagem: gerarMensagemDeErro(erro.code) });
        formikBag.setSubmitting(false);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.radios}>
          <Text>Pessoa Física</Text>
          <RadioButton
            value="pf"
            status={tipoPessoa === 'pf' ? 'checked' : 'unchecked'}
            onPress={() => setTipoPessoa('pf')}
          />

          <Text>Pessoa Jurídica</Text>
          <RadioButton
            value="pj"
            status={tipoPessoa === 'pj' ? 'checked' : 'unchecked'}
            onPress={() => setTipoPessoa('pj')}
          />
        </View>

        <Form enviarFormulario={enviarFormulario} />
      </ScrollView>
      <AlertDialog
        visible={dialog.visivel}
        onDismiss={() => setDialog({ visivel: false })}
        title="Erro ao criar conta"
        content={dialog.mensagem}
        onConfirm={() => {}}
        acoes={(
          <>
            <Button onPress={() => setDialog({ visivel: false })}>OK</Button>
          </>
        )}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollview: {
    flexGrow: 1,
    padding: 20,
  },
  button: {
    marginVertical: 15,
  },
  radios: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CadastroCliente;
