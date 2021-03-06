import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import { Formik, Field } from 'formik';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import moment from 'moment';
import FormInput from '../FormInput';
import { getPlacas } from '../../services/firebase/veiculos';

const SERVICOS = [
  {
    value: 'Remoção e instalação do alternador',
  },
  {
    value: 'Remoção e instalação do compressor',
  },
  {
    value: 'Remoção e instalação do radiador',
  },
  {
    value: 'Revisão',
  },
  {
    value: 'Substituir anel de camisa',
  },
  {
    value: 'Substituir junta do cabeçote',
  },
  {
    value: 'Substituir lona de freio',
  },
  {
    value: 'Substituir mangueira do radiador',
  },
  {
    value: 'Substituir válvula',
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
    if (data) handleChange('data')(moment(data).format('DD/MM/YYYY'));
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
    </ScrollView>
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
  values: PropTypes.shape({
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
  initialValues: PropTypes.shape({
    placa: PropTypes.string,
    serviço: PropTypes.string,
    observação: PropTypes.string,
    data: PropTypes.string,
  }),
  edit: PropTypes.bool,
};

FormikAgendamentoForm.defaultProps = {
  edit: false,
  initialValues: {
    placa: '',
    serviço: '',
    observação: '',
    data: '',
  },
};

export default FormikAgendamentoForm;
