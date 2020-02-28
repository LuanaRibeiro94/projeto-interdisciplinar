import React from 'react';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PessoaFisicaForm = () => {
  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <TextInput mode="outlined" label="CPF" />
      <TextInput mode="outlined" label="RG" />
      <TextInput mode="outlined" label="Nome" />
      <TextInput mode="outlined" label="Logradouro" />
      <TextInput mode="outlined" label="Número" />
      <TextInput mode="outlined" label="Bairro" />
      <TextInput mode="outlined" label="CEP" />
      <TextInput mode="outlined" label="E-mail" />
      <TextInput mode="outlined" label="Telefone" />
    </KeyboardAwareScrollView>
  );
};

export default PessoaFisicaForm;
