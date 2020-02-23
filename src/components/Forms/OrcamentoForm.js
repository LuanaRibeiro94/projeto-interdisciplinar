import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Formik, Field } from 'formik';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import { getPlacas } from '../../services/firebase/veiculos';

const PECAS = [
  {
    value: 'Filtro racor',
  },
  {
    value: 'Filtro diesel',
  },
  {
    value: 'Filtro combustível motor',
  },
  {
    value: 'Válvula APS',
  },
  {
    value: 'Lona de freio',
  },
];

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

const OrcamentoForm = ({
  handleChange, submitForm, edit, values,
}) => {
  const [placasVeiculos, setPlacasVeiculos] = useState([]);

  useEffect(() => {
    getPlacas()
      .then(placas => setPlacasVeiculos(placas));
  }, []);

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
        name="peça"
        component={Dropdown}
        label="Peça"
        data={PECAS}
        rippleDuration={0}
        animationDuration={0}
        onChangeText={handleChange('peça')}
        value={values.peça}
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
    </View>
  );
};

const FormikOrcamentoForm = ({ enviarFormulario, initialValues, edit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={valores => enviarFormulario(valores)}
    >
      { props => <OrcamentoForm edit={edit} {...props} />}
    </Formik>
  );
};

OrcamentoForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  values: PropTypes.exact({
    key: PropTypes.string,
    placa: PropTypes.string,
    peça: PropTypes.string,
    serviço: PropTypes.string,
    observação: PropTypes.string,
  }).isRequired,
};

OrcamentoForm.defaultProps = {
  edit: false,
};

FormikOrcamentoForm.propTypes = {
  enviarFormulario: PropTypes.func.isRequired,
  initialValues: PropTypes.exact({
    key: PropTypes.string,
    placa: PropTypes.string,
    peça: PropTypes.string,
    serviço: PropTypes.string,
    observação: PropTypes.string,
  }),
  edit: PropTypes.bool,
};

FormikOrcamentoForm.defaultProps = {
  edit: false,
  initialValues: {
    key: '',
    placa: '',
    peça: '',
    serviço: '',
    observação: '',
  },
};

export default FormikOrcamentoForm;
