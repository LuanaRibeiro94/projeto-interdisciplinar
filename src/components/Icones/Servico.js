import React from 'react';
import PropTypes from 'prop-types';
import { Foundation } from '@expo/vector-icons';

const ServicoIcone = ({ size, color }) => {
  return <Foundation name="wrench" size={size} color={color} />;
};

ServicoIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ServicoIcone;
