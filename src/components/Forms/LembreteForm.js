import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import { Formik, Field, ErrorMessage } from 'formik';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as Yup from 'yup';
import FormInput from '../FormInput';
import ErrorText from '../ErrorText';
import { getPlacas } from '../../services/firebase/veiculos';

const validationSchema = Yup.object().shape({
  descricao: Yup.string()
    .required('Este campo é obrigatório'),
  data: Yup.string()
    .required('Este campo é obrigatório')
    .test('>= data atual', 'A data não pode ser menor que a data atual', valor => {
      if (!valor) return true;

      const hoje = moment().utc(true).startOf('day');
      return !moment(valor, 'DD/MM/YYYY').isBefore(hoje);
    }),
  hora: Yup.string()
    .required('Este campo é obrigatório'),
});

const LembreteForm = ({
  handleChange, submitForm, edit, values,
}) => {
  const [placasVeiculos, setPlacasVeiculos] = useState([]);
  const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
  const [mostrarTimePicker, setMostrarTimePicker] = useState(false);

  useEffect(() => {
    getPlacas()
      .then(placas => setPlacasVeiculos(placas));
  }, []);

  const onDataChange = (evento, data) => {
    setMostrarDatePicker(false);
    if (data) handleChange('data')(moment(data).format('DD/MM/YYYY'));
  };

  const onTimeChange = (evento, hora) => {
    setMostrarTimePicker(false);
    if (hora) handleChange('hora')(moment(hora).format('HH:mm'));
  };

  return (
    <ScrollView>
      <Field
        name="placa"
        component={Dropdown}
        label="Placa"
        data={placasVeiculos}
        rippleDuration={0}
        animationDuration={0}
        onChangeText={handleChange('placa')}
        value={values.placa}
      />

      <Field
        name="descricao"
        component={FormInput}
        label="Descrição"
        mode="outlined"
        onChangeText={handleChange('descricao')}
      />
      <ErrorMessage name="descricao" component={ErrorText} />

      <TouchableWithoutFeedback onPress={() => setMostrarDatePicker(true)}>
        <View>
          <View pointerEvents="none">
            <Field
              name="data"
              component={FormInput}
              label="Data"
              mode="outlined"
              onChangeText={handleChange('data')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <ErrorMessage name="data" component={ErrorText} />

      <TouchableWithoutFeedback onPress={() => setMostrarTimePicker(true)}>
        <View>
          <View pointerEvents="none">
            <Field
              name="hora"
              component={FormInput}
              label="Hora"
              mode="outlined"
              onChangeText={handleChange('hora')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <ErrorMessage name="hora" component={ErrorText} />

      <Button mode="contained" onPress={submitForm} style={{ marginTop: 15 }} labelStyle={{ color: 'white' }}>
        { edit ? 'ALTERAR' : 'CADASTRAR'}
      </Button>

      {mostrarDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          onChange={onDataChange}
        />
      )}

      {mostrarTimePicker && (
        <DateTimePicker
          value={new Date().getTime()}
          mode="time"
          onChange={onTimeChange}
          timeZoneOffsetInMinutes={0}
        />
      )}
    </ScrollView>
  );
};

const FormikLembreteForm = ({ enviarFormulario, initialValues, edit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={valores => enviarFormulario(valores)}
      validationSchema={validationSchema}
    >
      { props => <LembreteForm edit={edit} {...props} />}
    </Formik>
  );
};

LembreteForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  values: PropTypes.shape({
    placa: PropTypes.string,
    descricao: PropTypes.string,
    data: PropTypes.string,
    hora: PropTypes.string,
  }).isRequired,
};

LembreteForm.defaultProps = {
  edit: false,
};

FormikLembreteForm.propTypes = {
  enviarFormulario: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    placa: PropTypes.string,
    descricao: PropTypes.string,
    data: PropTypes.string,
    hora: PropTypes.string,
  }),
  edit: PropTypes.bool,
};

FormikLembreteForm.defaultProps = {
  edit: false,
  initialValues: {
    placa: '',
    descricao: '',
    data: '',
    hora: '',
  },
};

export default FormikLembreteForm;
