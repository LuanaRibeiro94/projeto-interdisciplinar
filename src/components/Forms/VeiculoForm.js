import React from 'react';
import { View } from 'react-native';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import FormInput from '../FormInput';
import ErrorText from '../ErrorText';

const validationSchema = Yup.object().shape({
  placa: Yup.string()
    .length(7, 'Formato inválido')
    .required('Este campo é obrigatório'),
  chassi: Yup.string()
    .required('Este campo é obrigatório'),
  modelo: Yup.string()
    .required('Este campo é obrigatório'),
});

const MARCAS = [{
  value: 'Scania',
}, {
  value: 'Volvo',
}, {
  value: 'Volkswagen',
},
];

const VeiculoForm = ({ handleChange, submitForm, edit, values }) => {
  return (
    <View>
      <Field
        name="placa"
        component={FormInput}
        mode="outlined"
        label="Placa"
        onChangeText={handleChange('placa')}
        autoCapitalize="characters"
      />
      <ErrorMessage name="placa" component={ErrorText} />

      <Field
        name="frota"
        component={FormInput}
        mode="outlined"
        label="Frota"
        onChangeText={handleChange('frota')}
        autoCapitalize="characters"
      />
      <ErrorMessage name="frota" component={ErrorText} />

      <Field
        name="chassi"
        component={FormInput}
        mode="outlined"
        label="Chassi"
        onChangeText={handleChange('chassi')}
        keyboardType="numeric"
      />
      <ErrorMessage name="chassi" component={ErrorText} />

      <Field
        name="modelo"
        component={FormInput}
        mode="outlined"
        label="Modelo"
        onChangeText={handleChange('modelo')}
        autoCapitalize="characters"
      />
      <ErrorMessage name="modelo" component={ErrorText} />

      <Field
        name="marca"
        component={Dropdown}
        label="Marca"
        onChangeText={handleChange('marca')}
        data={MARCAS}
        rippleDuration={0}
        animationDuration={0}
        value={values.marca}
      />

      <Button mode="contained" onPress={submitForm} style={{ marginTop: 15 }}>
        { edit ? 'ALTERAR' : 'CADASTRAR'}
      </Button>
    </View>
  );
};

const FormikVeiculoForm = ({ enviarFormulario, initialValues, edit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={valores => enviarFormulario(valores)}
      validationSchema={validationSchema}
    >
      { props => <VeiculoForm edit={edit} {...props} />}
    </Formik>
  );
};

export default FormikVeiculoForm;
