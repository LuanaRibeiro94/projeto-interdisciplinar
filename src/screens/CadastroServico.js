import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';

class CadastroServico extends Component {
  state = {
    data: null,
  };

  render() {
    const { data } = this.state;
    const placa = [{
      value: 'ABC-123',
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
        <TextInput mode="outlined" label="Odômetro" />
        <TextInput mode="outlined" label="Local" />
        <TextInput mode="outlined" label="Tipo de despesa" />
        <TextInput mode="outlined" label="Valor" />

        <DatePicker
          mode="date"
          date={data}
          format="DD-MM-YYYY"
          showIcon={false}
          placeholder="Selecione a data"
          onDateChange={_data => { this.setState({ data: _data }); }}
          style={styles.datePicker}
          customStyles={
            {
              dateInput: styles.dateInput,
            }
          }
        />

        <TextInput
          mode="outlined"
          label="Observações"
          multiline
          numberOfLines={4}
        />

        <Button mode="contained" onPress={this.submit} style={{ marginTop: 15 }}>
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
  datePicker: {
    width: undefined, // https://github.com/xgfe/react-native-datepicker/issues/312#issuecomment-473961790
    marginTop: 15,
  },
  dateInput: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 12,
  },
});

export default CadastroServico;
