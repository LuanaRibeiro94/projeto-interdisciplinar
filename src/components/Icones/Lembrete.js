import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LembreteIcone = ({ size, color }) => {
  return <MaterialCommunityIcons name="alarm-check" size={size} color={color} />;
};

LembreteIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default LembreteIcone;
