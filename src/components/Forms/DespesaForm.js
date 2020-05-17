import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Formik, Field } from 'formik';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import moment from 'moment';
import FormInput from '../FormInput';
import { getPlacas } from '../../services/firebase/veiculos';

const DespesaForm = ({
  handleChange, submitForm, edit, values,
}) => {
  const [placasVeiculos, setPlacasVeiculos] = useState([]);
  const [mostrarDatePicker, setMostrarDatePicker] = useState(false);

  useEffect(() => {
    getPlacas()
      .then(placas => setPlacasVeiculos(placas));
  }, []);

  const onDataChange = (evento, data) => {
    setMostrarDatePicker(false);
    if (data) handleChange('data')(moment(data).format('DD MM YYYY'));
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid>
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
        name="local"
        component={FormInput}
        mode="outlined"
        label="Local"
        onChangeText={handleChange('local')}
      />

      <Field
        name="tipoDespesa"
        component={FormInput}
        mode="outlined"
        label="Tipo de despesa"
        onChangeText={handleChange('tipoDespesa')}
      />

      <Field
        name="valor"
        component={FormInput}
        mode="outlined"
        label="Valor"
        onChangeText={handleChange('valor')}
        keyboardType="numeric"
      />

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

      <Field
        name="observação"
        component={FormInput}
        mode="outlined"
        label="Observação"
        multiline
        numberOfLines={8}
        onChangeText={handleChange('observação')}
      />

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
    </KeyboardAwareScrollView>
  );
};

const FormikDespesaForm = ({ enviarFormulario, initialValues, edit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={valores => enviarFormulario(valores)}
    >
      { props => <DespesaForm edit={edit} {...props} />}
    </Formik>
  );
};

DespesaForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  values: PropTypes.shape({
    placa: PropTypes.string,
    local: PropTypes.string,
    tipoDespesa: PropTypes.string,
    valor: PropTypes.string,
    data: PropTypes.string,
    observação: PropTypes.string,
  }).isRequired,
};

DespesaForm.defaultProps = {
  edit: false,
};

FormikDespesaForm.propTypes = {
  enviarFormulario: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    placa: PropTypes.string,
    local: PropTypes.string,
    tipoDespesa: PropTypes.string,
    valor: PropTypes.string,
    data: PropTypes.string,
    observação: PropTypes.string,
  }),
  edit: PropTypes.bool,
};

FormikDespesaForm.defaultProps = {
  edit: false,
  initialValues: {
    placa: '',
    local: '',
    tipoDespesa: '',
    valor: '',
    data: '',
    observação: '',
  },
};

export default FormikDespesaForm;
