import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

const OrcamentoIcone = ({ size, color, style }) => {
  return <MaterialIcons name="attach-money" size={size} color={color} style={style} />;
};

OrcamentoIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};

OrcamentoIcone.defaultProps = {
  style: {},
};

export default OrcamentoIcone;
