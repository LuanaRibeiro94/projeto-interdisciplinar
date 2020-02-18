import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';

const Listar = ({ navigation }) => {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    const ref = firebase.database().ref('veiculos');

    ref.on('value', onValueChange);

    return () => ref.off('value', onValueChange);
  }, []);

  const onValueChange = snapShot => {
    const dadosVeiculos = [];

    snapShot.forEach(veiculo => {
      dadosVeiculos.push({
        key: veiculo.key,
        ...veiculo.val(),
      });
    });

    setVeiculos(dadosVeiculos);
  };

  return (
    <View style={styles.container}>
      {
        veiculos.map(veiculo => (
          <List.Item
            key={veiculo.key}
            title={veiculo.marca}
            description={veiculo.placa}
            onPress={() => navigation.navigate('VeiculoFormScreen', {
              edit: true,
              initialValues: veiculo,
            })}
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
        icon="plus"
        onPress={() => { navigation.navigate('VeiculoFormScreen'); }}
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
