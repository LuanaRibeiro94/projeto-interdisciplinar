import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

const PessoaFisicaForm = () => {
  return (
    <View>
      <TextInput mode="outlined" label="CPF" />
      <TextInput mode="outlined" label="RG" />
      <TextInput mode="outlined" label="Nome" />
      <TextInput mode="outlined" label="Logradouro" />
      <TextInput mode="outlined" label="Número" />
      <TextInput mode="outlined" label="Bairro" />
      <TextInput mode="outlined" label="CEP" />
      <TextInput mode="outlined" label="E-mail" />
      <TextInput mode="outlined" label="Telefone" />
    </View>
  );
};

export default PessoaFisicaForm;
