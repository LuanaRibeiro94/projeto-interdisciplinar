import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

const DespesaIcone = ({ size, color, style }) => {
  return <FontAwesome name="credit-card" size={size} color={color} style={style} />;
};

DespesaIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};

DespesaIcone.defaultProps = {
  style: {},
};

export default DespesaIcone;
