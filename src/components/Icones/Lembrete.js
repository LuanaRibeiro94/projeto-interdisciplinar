import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LembreteIcone = ({ size, color, style }) => {
  return <MaterialCommunityIcons name="alarm-check" size={size} color={color} style={style} />;
};

LembreteIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};

LembreteIcone.defaultProps = {
  style: {},
};

export default LembreteIcone;
