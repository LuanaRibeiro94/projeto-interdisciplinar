import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik, Field, ErrorMessage } from 'formik';
import { Button } from 'react-native-paper';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import ErrorText from '../ErrorText';
import FormInput from '../FormInput';

const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .required('Este campo é obrigatório'),
  cpf: Yup.string()
    .required('Este campo é obrigatório'),
  rg: Yup.string()
    .required('Este campo é obrigatório'),
  logradouro: Yup.string()
    .required('Este campo é obrigatório'),
  numero: Yup.string()
    .required('Número é obrigatório'),
  bairro: Yup.string()
    .required('Este campo é obrigatório'),
  cep: Yup.string()
    .required('CEP é obrigatório'),
  cidade: Yup.string()
    .required('Este campo é obrigatório'),
  estado: Yup.string()
    .required('Este campo é obrigatório'),
  telefone: Yup.string()
    .required('Este campo é obrigatório'),
  email: Yup.string()
    .email('Formato de email inválido')
    .required('Este campo é obrigatório'),
  senha: Yup.string()
    .required('Este campo é obrigatório'),
});

const PessoaFisicaForm = ({
  handleChange,
  submitForm,
  isSubmitting,
}) => {
  const campoCpf = useRef();
  const campoRg = useRef();
  const campoLogradouro = useRef();
  const campoNumero = useRef();
  const campoCep = useRef();
  const campoBairro = useRef();
  const campoCidade = useRef();
  const campoEstado = useRef();
  const campoTelefone = useRef();
  const campoEmail = useRef();
  const campoSenha = useRef();

  return (
    <>
      <Field
        name="nome"
        component={FormInput}
        mode="outlined"
        label="Nome"
        onChangeText={handleChange('nome')}
        returnKeyType="next"
        onSubmitEditing={() => campoCpf.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="nome" component={ErrorText} />

      <Field
        name="cpf"
        component={FormInput}
        componentRef={campoCpf}
        mode="outlined"
        label="CPF"
        onChangeText={handleChange('cpf')}
        returnKeyType="next"
        onSubmitEditing={() => campoRg.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="cpf" component={ErrorText} />

      <Field
        name="rg"
        component={FormInput}
        componentRef={campoRg}
        mode="outlined"
        label="RG"
        onChangeText={handleChange('rg')}
        returnKeyType="next"
        onSubmitEditing={() => campoLogradouro.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="rg" component={ErrorText} />

      <Field
        name="logradouro"
        component={FormInput}
        componentRef={campoLogradouro}
        mode="outlined"
        label="Logradouro"
        onChangeText={handleChange('logradouro')}
        returnKeyType="next"
        onSubmitEditing={() => campoNumero.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="logradouro" component={ErrorText} />

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 0.3, marginRight: 5 }}>
          <Field
            name="numero"
            component={FormInput}
            componentRef={campoNumero}
            mode="outlined"
            label="Nº"
            onChangeText={handleChange('numero')}
            returnKeyType="next"
            onSubmitEditing={() => campoCep.current.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={{ flex: 0.7 }}>
          <Field
            name="cep"
            component={FormInput}
            componentRef={campoCep}
            mode="outlined"
            label="CEP"
            onChangeText={handleChange('cep')}
            returnKeyType="next"
            onSubmitEditing={() => campoBairro.current.focus()}
            blurOnSubmit={false}
          />
        </View>
      </View>
      <ErrorMessage name="cep" component={ErrorText} />
      <ErrorMessage name="numero" component={ErrorText} />

      <Field
        name="bairro"
        component={FormInput}
        componentRef={campoBairro}
        mode="outlined"
        label="Bairro"
        onChangeText={handleChange('bairro')}
        returnKeyType="next"
        onSubmitEditing={() => campoCidade.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="bairro" component={ErrorText} />

      <Field
        name="cidade"
        component={FormInput}
        componentRef={campoCidade}
        mode="outlined"
        label="Cidade"
        onChangeText={handleChange('cidade')}
        returnKeyType="next"
        onSubmitEditing={() => campoEstado.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="cidade" component={ErrorText} />

      <Field
        name="estado"
        component={FormInput}
        componentRef={campoEstado}
        mode="outlined"
        label="Estado"
        onChangeText={handleChange('estado')}
        returnKeyType="next"
        onSubmitEditing={() => campoTelefone.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="estado" component={ErrorText} />

      <Field
        name="telefone"
        component={FormInput}
        componentRef={campoTelefone}
        mode="outlined"
        label="Telefone"
        onChangeText={handleChange('telefone')}
        returnKeyType="next"
        onSubmitEditing={() => campoEmail.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="telefone" component={ErrorText} />

      <Field
        name="email"
        component={FormInput}
        componentRef={campoEmail}
        mode="outlined"
        label="E-mail"
        onChangeText={handleChange('email')}
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => campoSenha.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="email" component={ErrorText} />

      <Field
        name="senha"
        component={FormInput}
        componentRef={campoSenha}
        mode="outlined"
        label="Senha"
        onChangeText={handleChange('senha')}
        secureTextEntry
      />
      <ErrorMessage name="senha" component={ErrorText} />

      <Button
        mode="contained"
        onPress={submitForm}
        style={styles.button}
        labelStyle={styles.buttonColor}
        disabled={isSubmitting}
      >
        Cadastrar
      </Button>
    </>
  );
};

const FormikPessoaFisicaForm = ({ enviarFormulario }) => {
  return (
    <Formik
      onSubmit={enviarFormulario}
      validationSchema={validationSchema}
      component={PessoaFisicaForm}
      initialValues={{
        nome: '',
        cpf: '',
        rg: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
        telefone: '',
        email: '',
        senha: '',
      }}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
  },
  buttonColor: {
    color: 'white',
  },
});

FormikPessoaFisicaForm.propTypes = {
  enviarFormulario: PropTypes.func.isRequired,
};

PessoaFisicaForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default FormikPessoaFisicaForm;
