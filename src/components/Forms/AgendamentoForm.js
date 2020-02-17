import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Formik, Field } from 'formik';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import { getPlacas } from '../../services/firebase/veiculos';

const SERVICOS = [
  {
    value: 'Troca de óleo',
  },
  {
    value: 'Trocar lona de freio',
  },
  {
    value: 'Substituir válvula APS',
  },
];

const AgendamentoForm = ({
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
    if (data) handleChange('data')(data.toString());
  };

  return (
    <View>
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
        name="serviço"
        component={Dropdown}
        label="Serviço"
        data={SERVICOS}
        rippleDuration={0}
        animationDuration={0}
        onChangeText={handleChange('serviço')}
        value={values.serviço}
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

      <Button mode="contained" onPress={submitForm} style={{ marginTop: 15 }}>
        { edit ? 'ALTERAR' : 'CADASTRAR'}
      </Button>

      {mostrarDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          onChange={onDataChange}
        />
      )}
    </View>
  );
};

const FormikAgendamentoForm = ({ enviarFormulario, initialValues, edit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={valores => enviarFormulario(valores)}
    >
      { props => <AgendamentoForm edit={edit} {...props} />}
    </Formik>
  );
};

AgendamentoForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  values: PropTypes.exact({
    key: PropTypes.string,
    placa: PropTypes.string,
    serviço: PropTypes.string,
    observação: PropTypes.string,
    data: PropTypes.string,
  }).isRequired,
};

AgendamentoForm.defaultProps = {
  edit: false,
};

FormikAgendamentoForm.propTypes = {
  enviarFormulario: PropTypes.func.isRequired,
  initialValues: PropTypes.exact({
    key: PropTypes.string,
    placa: PropTypes.string,
    serviço: PropTypes.string,
    observação: PropTypes.string,
  }).isRequired,
  edit: PropTypes.bool,
};

FormikAgendamentoForm.defaultProps = {
  edit: false,
};


export default FormikAgendamentoForm;
