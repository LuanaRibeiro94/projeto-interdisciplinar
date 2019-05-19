import React from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity} from 'react-native';
import Column from './components/Column';
import Input from './components/Input';

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
      <View style={styles.container}>
        <Input label='Placa'/>        
        <Input label='Frota'/>
        <Input label='Chassi'/>
        <Input label='Modelo'/>
  
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

        <TouchableOpacity style={styles.button} onPress={this.submit}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
