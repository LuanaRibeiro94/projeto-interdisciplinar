import React from 'react';
import { View } from 'react-native';
import { Formik, Field } from 'formik';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import FormInput from '../FormInput';

const PLACAS = [{
  value: 'ABC-123',
},
];

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

const OrcamentoForm = ({ handleChange, submitForm }) => {
  return (
    <View>
      <Field
        name="placa"
        component={Dropdown}
        label="Placa"
        data={PLACAS}
        rippleDuration={0}
        animationDuration={0}
        onChangeText={handleChange('placa')}
      />

      <Field
        name="peça"
        component={Dropdown}
        label="Peça"
        data={PECAS}
        rippleDuration={0}
        animationDuration={0}
        onChangeText={handleChange('peça')}
      />

      <Field
        name="serviço"
        component={Dropdown}
        label="Serviço"
        data={SERVICOS}
        rippleDuration={0}
        animationDuration={0}
        onChangeText={handleChange('serviço')}
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
        CADASTRAR
      </Button>
    </View>
  );
};

const FormikOrcamentoForm = ({ enviarFormulario }) => {
  return (
    <Formik
      component={OrcamentoForm}
      onSubmit={valores => enviarFormulario(valores)}
    />
  );
};

export default FormikOrcamentoForm;
