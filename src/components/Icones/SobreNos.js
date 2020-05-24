import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SobreNosIcone = ({ size, color }) => {
  return <MaterialCommunityIcons name="information-outline" size={size} color={color} />;
};

SobreNosIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default SobreNosIcone;
