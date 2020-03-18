import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CaminhaoIcone = ({ size, color }) => {
  return <MaterialCommunityIcons name="truck" size={size} color={color} />;
};

CaminhaoIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default CaminhaoIcone;
