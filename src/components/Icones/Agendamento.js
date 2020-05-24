import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AgendamentoIcone = ({ size, color, style }) => {
  return <MaterialCommunityIcons name="calendar-clock" size={size} color={color} style={style} />;
};

AgendamentoIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};

AgendamentoIcone.defaultProps = {
  style: {},
};

export default AgendamentoIcone;
