import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

const DespesaIcone = ({ size, color }) => {
  return <FontAwesome name="credit-card" size={size} color={color} />;
};

DespesaIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default DespesaIcone;
