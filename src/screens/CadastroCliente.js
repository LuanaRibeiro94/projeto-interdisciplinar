import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import PessoaFisicaForm from '../components/Forms/PessoaFisicaForm';
import PessoaJuridicaForm from '../components/Forms/PessoaJuridicaForm';

class CadastroCliente extends Component {
  state = {
    tipoPessoa: 'pf',
  };

  submit() {}

  render() {
    const { tipoPessoa } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={64 + 16}>
        <ScrollView>
          <View flexDirection="row">
            <Text>Pessoa Física</Text>
            <RadioButton
              value="pf"
              status={tipoPessoa === 'pf' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ tipoPessoa: 'pf' }); }}
            />

            <Text>Pessoa Jurídica</Text>
            <RadioButton
              value="pj"
              status={tipoPessoa === 'pj' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ tipoPessoa: 'pj' }); }}
            />
          </View>

          { tipoPessoa === 'pf' ? <PessoaFisicaForm /> : <PessoaJuridicaForm />}

          <Button mode="contained" onPress={this.submit} style={styles.button}>
            Cadastrar
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  button: {
    marginVertical: 15,
  },
});

export default CadastroCliente;
