import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import Column from './components/Column';
import { Button, Provider as PaperProvider, TextInput, Appbar } from 'react-native-paper';
import theme from './configs/theme';
import { Dropdown } from 'react-native-material-dropdown';

export default class App extends React.Component {
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
      
      <PaperProvider theme={theme}>
        
          <Appbar.Header>
            <Appbar.BackAction onPress={ () => {}}/>
              <Appbar.Content
                title="Cadastro de veículo"
              />
          </Appbar.Header>
           
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
      </PaperProvider>
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
