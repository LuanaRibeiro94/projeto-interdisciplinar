import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';

class Orcamento extends Component {
  state = {
  };

  render() {
    const placa = [{
      value: 'ABC-123',
    },
    ];

    const peca = [{
      value: 'Filtro',
    },
    ];

    const servico = [{
      value: 'Troca de óleo',
    },
    ];

    return (
      <View style={styles.container}>
        <Dropdown
          label="Placa"
          data={placa}
          rippleDuration={0}
          animationDuration={0}
        />

        <Dropdown
          label="Peça"
          data={peca}
          rippleDuration={0}
          animationDuration={0}
        />

        <Dropdown
          label="Serviço"
          data={servico}
          rippleDuration={0}
          animationDuration={0}
        />

        <TextInput
          mode="outlined"
          label="Observações"
          multiline = {true}
          numberOfLines = {8}
        />

        <Button mode="contained" onPress={this.submit} style={{ marginTop: 15 }}>
          Enviar
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});


export default Orcamento;
