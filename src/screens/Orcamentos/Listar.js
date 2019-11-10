import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';

const Listar = ({ navigation }) => {
  const [orcamentos, setOrcamentos] = useState([]);

  useEffect(() => {
    const dadosOrcamentos = [];

    firebase.database().ref('orçamentos').on('value', (snapShot) => {
      snapShot.forEach(orcamento => {
        dadosOrcamentos.push({
          key: orcamento.key,
          ...orcamento.val(),
        });
      });

      setOrcamentos(dadosOrcamentos);
    });

    return () => firebase.database().ref('orçamentos').off();
  });

  return (
    <View style={styles.container}>
      {
        orcamentos.map(orcamento => (
          <List.Item
            key={orcamento.key}
            title={orcamento.placa}
            description={orcamento.serviço}
            onPress={() => {}}
            right={props => (
              <Touchable
                onPress={() => {
                  firebase.database().ref(`orçamentos/${orcamento.key}`).remove();
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
        onPress={() => { navigation.navigate('SolicitarOrcamento'); }}
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
