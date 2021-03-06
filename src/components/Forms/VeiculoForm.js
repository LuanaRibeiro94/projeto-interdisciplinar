import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import ErrorText from '../ErrorText';

const validationSchema = Yup.object().shape({
  placa: Yup.string()
    .length(7, 'Formato inválido. É necessário informar 7 caracteres sendo letras e números')
    .required('Este campo é obrigatório'),
  chassi: Yup.string()
    .length(7, 'É necessário informar os 7 números finais da descrição do chassi no documento')
    .required('Este campo é obrigatório'),
});

const MARCAS = [{
  value: 'DAF',
}, {
  value: 'Ford',
}, {
  value: 'Iveco',
}, {
  value: 'MAN',
}, {
  value: 'Mercedes-Benz',
}, {
  value: 'Scania',
}, {
  value: 'Volkswagen',
}, {
  value: 'Volvo',
},
];

const VeiculoForm = ({
  handleChange, submitForm, edit, values,
}) => {
  const campoFrota = useRef();
  const campoChassi = useRef();
  const campoModelo = useRef();

  return (
    <ScrollView>
      <Field
        name="placa"
        component={FormInput}
        mode="outlined"
        label="Placa"
        onChangeText={handleChange('placa')}
        autoCapitalize="characters"
        returnKeyType="next"
        onSubmitEditing={() => campoFrota.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="placa" component={ErrorText} />

      <Field
        name="frota"
        component={FormInput}
        componentRef={campoFrota}
        mode="outlined"
        label="Frota"
        onChangeText={handleChange('frota')}
        autoCapitalize="characters"
        returnKeyType="next"
        onSubmitEditing={() => campoChassi.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="frota" component={ErrorText} />

      <Field
        name="chassi"
        component={FormInput}
        componentRef={campoChassi}
        mode="outlined"
        label="Chassi"
        onChangeText={handleChange('chassi')}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => campoModelo.current.focus()}
        blurOnSubmit={false}
      />
      <ErrorMessage name="chassi" component={ErrorText} />

      <Field
        name="modelo"
        component={FormInput}
        componentRef={campoModelo}
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

      <Button mode="contained" onPress={submitForm} style={{ marginTop: 15 }} labelStyle={{ color: 'white' }}>
        { edit ? 'ALTERAR' : 'CADASTRAR'}
      </Button>
    </ScrollView>
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

VeiculoForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  values: PropTypes.shape({
    placa: PropTypes.string,
    frota: PropTypes.string,
    chassi: PropTypes.string,
    modelo: PropTypes.string,
    marca: PropTypes.string,
  }).isRequired,
};

VeiculoForm.defaultProps = {
  edit: false,
};

FormikVeiculoForm.propTypes = {
  enviarFormulario: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    placa: PropTypes.string,
    frota: PropTypes.string,
    chassi: PropTypes.string,
    modelo: PropTypes.string,
    marca: PropTypes.string,
  }),
  edit: PropTypes.bool,
};

FormikVeiculoForm.defaultProps = {
  edit: false,
  initialValues: {
    placa: '',
    frota: '',
    chassi: '',
    modelo: '',
    marca: '',
  },
};

export default FormikVeiculoForm;
