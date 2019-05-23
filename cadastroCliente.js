import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Provider as PaperProvider, TextInput, Appbar, RadioButton } from 'react-native-paper';
import theme from './configs/theme';

export default class App extends React.Component {
  state = {
    checked: 'pf',
  };

  submit() {}

  render() {
    const { checked } = this.state;
    
    return (
      <ScrollView>
      <PaperProvider theme={theme}>
          <Appbar.Header>
            <Appbar.BackAction onPress={ () => {}}/>
              <Appbar.Content
                title="Cadastro de usuário" 
              />
          </Appbar.Header>
           
        <View style={styles.container}> 

          <View flexDirection='row'>
            <Text>Pessoa Física</Text>
            <RadioButton
              value='pf'
              status={checked === 'pf' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({checked : 'pf'}); }}
            />
            
            <Text>Pessoa Jurídica</Text>
            <RadioButton
              value='pj'
              status={checked === 'pj' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({checked : 'pj'}); }}
            />
          </View>

          <TextInput mode='outlined' label='CPF'/>    
          <TextInput mode='outlined' label='RG'/>    
          <TextInput mode='outlined' label='Nome'/>    
          <TextInput mode='outlined' label='Logradouro'/>    
          <TextInput mode='outlined' label='Número'/>    
          <TextInput mode='outlined' label='CEP'/>    
          <TextInput mode='outlined' label='Bairro'/>    
          <TextInput mode='outlined' label='E-mail'/>    
          <TextInput mode='outlined' label='Telefone'/>    

          <Button mode='contained' onPress={this.submit} style={{ marginTop:15 }}>
            Cadastrar
          </Button>
        </View>
      </PaperProvider>
      </ScrollView>
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
