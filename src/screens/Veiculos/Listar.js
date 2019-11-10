import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';

const Listar = ({ navigation }) => {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    const dadosVeiculos = [];

    firebase.database().ref('veiculos').on('value', (snapShot) => {
      snapShot.forEach(veiculo => {
        dadosVeiculos.push({
          key: veiculo.key,
          ...veiculo.val(),
        });
      });

      setVeiculos(dadosVeiculos);
    });

    return () => firebase.database().ref('veiculos').off();
  });

  return (
    <View style={styles.container}>
      {
        veiculos.map(veiculo => (
          <List.Item
            key={veiculo.key}
            title={veiculo.marca}
            description={veiculo.placa}
            onPress={() => {}}
            right={props => (
              <Touchable
                onPress={() => {
                  firebase.database().ref(`veiculos/${veiculo.key}`).remove();
                }}
                background={Touchable.Ripple('rgba(0, 0, 0, 0.2)', true)}
              >
                <List.Icon {...props} icon="close" />
              </Touchable>
            )
          }
          />
        ))
      }

      <BottomFAB
        icon="add"
        onPress={() => { navigation.navigate('CadastroVeiculo'); }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default Listar;
