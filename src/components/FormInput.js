import React from 'react';
import { TextInput } from 'react-native-paper';
import { getIn } from 'formik';

const FormInput = ({ field, form, ...resto }) => {
  const erro = () => {
    const touch = getIn(form.touched, field.name);
    const error = getIn(form.errors, field.name);

    return !!touch && !!error;
  };

  return (
    <TextInput
      error={erro(field, form)}
      value={field.value}
      {...resto}
    />
  );
};

export default FormInput;
