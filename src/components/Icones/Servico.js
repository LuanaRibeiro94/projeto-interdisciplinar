import React from 'react';
import PropTypes from 'prop-types';
import { Foundation } from '@expo/vector-icons';

const ServicoIcone = ({ size, color, style }) => {
  return <Foundation name="wrench" size={size} color={color} style={style} />;
};

ServicoIcone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};

ServicoIcone.defaultProps = {
  style: {},
};

export default ServicoIcone;
