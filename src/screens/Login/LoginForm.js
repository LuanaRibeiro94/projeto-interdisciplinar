import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Avatar, Colors } from 'react-native-paper';
import PropTypes from 'prop-types';
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
  const campoSenha = useRef();

  return (
    <View>
      <Avatar.Image
        source={require('../../assets/profile.png')}
        size={70}
        style={styles.avatar}
      />
      <Field
        name="email"
        component={FormInput}
        mode="outlined"
        label="E-mail"
        onChangeText={handleChange('email')}
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
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
      <Button mode="contained" onPress={submitForm} style={styles.button} labelStyle={styles.label}>
        LOGIN
      </Button>
      <Text style={styles.text}>
        Esqueceu sua senha?
      </Text>
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

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: Colors.white,
    alignSelf: 'center',
    margin: 20,
  },
  text: {
    margin: 10,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: Colors.grey700,
  },
  button: {
    marginTop: 15,
  },
  label: {
    color: 'white',
  },
});

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

FormikLoginForm.propTypes = {
  enviarFormulario: PropTypes.func.isRequired,
};

export default FormikLoginForm;
