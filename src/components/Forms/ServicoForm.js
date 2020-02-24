import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Formik, Field } from 'formik';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import moment from 'moment';
import FormInput from '../FormInput';
import { getPlacas } from '../../services/firebase/veiculos';

const ServicoForm = ({
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
        name="odômetro"
        component={FormInput}
        mode="outlined"
        label="Odômetro"
        onChangeText={handleChange('odometro')}
        keyboardType="numeric"
      />

      <Field
        name="local"
        component={FormInput}
        mode="outlined"
        label="Local"
        onChangeText={handleChange('local')}
        autoCapitalize="characters"
      />

      <Field
        name="descricao"
        component={FormInput}
        mode="outlined"
        label="Descrição"
        onChangeText={handleChange('descricao')}
        autoCapitalize="characters"
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
        name="observacao"
        component={FormInput}
        mode="outlined"
        label="Observação"
        multiline
        numberOfLines={8}
        onChangeText={handleChange('observacao')}
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

const FormikServicoForm = ({ enviarFormulario, initialValues, edit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={valores => enviarFormulario(valores)}
    >
      { props => <ServicoForm edit={edit} {...props} />}
    </Formik>
  );
};

ServicoForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  values: PropTypes.shape({
    placa: PropTypes.string,
    odometro: PropTypes.string,
    local: PropTypes.string,
    descricao: PropTypes.string,
    valor: PropTypes.string,
    data: PropTypes.string,
    observacao: PropTypes.string,
  }).isRequired,
};

ServicoForm.defaultProps = {
  edit: false,
};

FormikServicoForm.propTypes = {
  enviarFormulario: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    placa: PropTypes.string,
    odometro: PropTypes.string,
    local: PropTypes.string,
    descricao: PropTypes.string,
    valor: PropTypes.string,
    data: PropTypes.string,
    observacao: PropTypes.string,
  }),
  edit: PropTypes.bool,
};

FormikServicoForm.defaultProps = {
  edit: false,
  initialValues: {
    placa: '',
    odometro: '',
    local: '',
    descricao: '',
    valor: '',
    data: '',
    observacao: '',
  },
};

export default FormikServicoForm;
