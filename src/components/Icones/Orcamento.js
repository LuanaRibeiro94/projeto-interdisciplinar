import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

const OrcamentoIcone = ({ size, color }) => {
  return <MaterialIcons name="attach-money" size={size} color={color} />;
};

OrcamentoIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default OrcamentoIcone;
