import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';

class CadastroVeiculo extends Component {
  state = {
    marca: ''
  }

  submit() {}

  atribuirMarca = (itemValue) => {
    this.setState({ marca: itemValue })
  }

  render() {
    let marca = [{
      value: 'Scania',
    }, {
      value: 'Volvo',
    }, {
      value: 'Volkswagen',
    }
    ];

    return (
      <View style={styles.container}>
        <TextInput mode='outlined' label='Placa'/>    
        <TextInput mode='outlined' label='Frota'/>    
        <TextInput mode='outlined' label='Chassi'/>    
        <TextInput mode='outlined' label='Modelo'/>    
    
        <Dropdown 
          label='Marca'
          data={marca}
          rippleDuration={0}
          animationDuration={0}
        />
    
        <Button mode='contained' onPress={this.submit} style={{ marginTop:15 }}>
          Cadastrar
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

export default CadastroVeiculo;