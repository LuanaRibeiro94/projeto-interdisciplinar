import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ProgressBar, Colors } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';

class StatusServicos extends Component {
  state = {
  };

  render() {
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
        <Text>Em execução</Text>
        <ProgressBar progress={0.5} color={Colors.blue500} />
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


export default StatusServicos;
