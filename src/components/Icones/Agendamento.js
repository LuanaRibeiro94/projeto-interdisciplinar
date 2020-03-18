import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AgendamentoIcone = ({ size, color }) => {
  return <MaterialCommunityIcons name="calendar-clock" size={size} color={color} />;
};

AgendamentoIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default AgendamentoIcone;
