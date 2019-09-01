import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';

class CadastroServico extends Component {
  render() {
    const placa = [{
      value: 'ABC-123',
    },
    ];

    return (
      <View>
        <Dropdown
          label="Placa"
          data={placa}
          rippleDuration={0}
          animationDuration={0}
        />
        <TextInput mode="outlined" label="Local"/>
      </View>
    );
  }
}

export default CadastroServico;
