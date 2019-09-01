import React from 'react';
import { View } from 'react-native';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-native-paper';
import FormInput from '../../components/FormInput';
import ErrorText from '../../components/ErrorText';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Endereço de e-mail inválido')
    .required('Este campo é obrigatório'),
  senha: Yup.string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres')
    .required('Este campo é obrigatório'),
});

const LoginForm = ({ handleChange, submitForm }) => {
  return (
    <View>
      <Field
        name="email"
        component={FormInput}
        mode="outlined"
        label="E-mail"
        onChangeText={handleChange('email')}
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <ErrorMessage name="email" component={ErrorText} />
      <Field
        name="senha"
        component={FormInput}
        mode="outlined"
        label="Senha"
        onChangeText={handleChange('senha')}
        secureTextEntry
      />
      <ErrorMessage name="senha" component={ErrorText} />
      <Button mode="contained" onPress={submitForm} style={{ marginTop: 15 }}>
        LOGIN
      </Button>
    </View>
  );
};

const FormikLoginForm = ({ enviarFormulario }) => {
  return (
    <Formik
      component={LoginForm}
      initialValues={{ email: '', senha: '' }}
      onSubmit={valores => enviarFormulario(valores)}
      validationSchema={validationSchema}
    />
  );
};

export default FormikLoginForm;
