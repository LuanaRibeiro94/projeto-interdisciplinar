import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import Column from './components/Column';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Column>
          <Text>Placa</Text>
          <TextInput style={{borderWidth:2, width:100, height:40}} />
        </Column>

        <Column>
          <Text>Frota</Text>
          <TextInput style={{borderWidth:1, width:100, height:40}} />
        </Column>

        <Column>
          <Text>Chassi</Text>
          <TextInput style={{borderWidth:1, width:100, height:40}} />
        </Column>

        <Column>
          <Text>Modelo</Text>
          <TextInput style={{borderWidth:1, width:100, height:40}} />
        </Column>

        <Column>
          <Text>Marca</Text>
          <View style={{borderWidth:1}}>
            <Picker style={{width:150, height:40}}>
              <Picker.Item label="Scania" value="scania"/>
              <Picker.Item label="Volvo" value="volvo"/>
              <Picker.Item label="Volkswagen" value="volkswagen"/> 
            </Picker>
          </View>
        </Column>

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
});
