import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';

const Listar = ({ navigation }) => {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const ref = firebase.database().ref('despesas');

    ref.on('value', onValueChange);

    return () => ref.off('value', onValueChange);
  }, []);

  const onValueChange = snapShot => {
    const dadosDespesas = [];

    snapShot.forEach(despesa => {
      dadosDespesas.push({
        key: despesa.key,
        ...despesa.val(),
      });
    });

    setDespesas(dadosDespesas);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          despesas.map(despesa => (
            <List.Item
              key={despesa.key}
              title={despesa.placa}
              description={despesa.tipoDespesa}
              onPress={() => navigation.navigate('DespesaFormScreen', {
                edit: true,
                initialValues: despesa,
              })}
              right={props => (
                <Touchable
                  onPress={() => {
                    firebase.database().ref(`despesas/${despesa.key}`).remove();
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
      </ScrollView>
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('DespesaFormScreen'); }}
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
