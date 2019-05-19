import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import Column from './components/Column';
import { Button, Provider as PaperProvider, TextInput, Appbar } from 'react-native-paper';
import theme from './configs/theme';

export default class App extends React.Component {
  state = {
    marca: ''
  }

  submit() {}

  atribuirMarca = (itemValue) => {
    this.setState({ marca: itemValue })
  }

  render() {
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
    
          <Column>
            <Text>Marca</Text>
            <View style={{borderWidth:1}}>
              <Picker style={{width:150, height:40}} selectedValue={this.state.marca} onValueChange={this.atribuirMarca} >
                <Picker.Item label="Scania" value="scania"/>
                <Picker.Item label="Volvo" value="volvo"/>
                <Picker.Item label="Volkswagen" value="volkswagen"/> 
              </Picker>
            </View>
          </Column>

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
