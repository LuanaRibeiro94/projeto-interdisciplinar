import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';

const Listar = ({ navigation }) => {
  const [orcamentos, setOrcamentos] = useState([]);

  useEffect(() => {
    const ref = firebase.database().ref('orçamentos');

    ref.on('value', onValueChange);

    return () => ref.off('value', onValueChange);
  }, []);

  const onValueChange = snapShot => {
    const dadosOrcamentos = [];

    snapShot.forEach(orcamento => {
      dadosOrcamentos.push({
        key: orcamento.key,
        ...orcamento.val(),
      });
    });

    setOrcamentos(dadosOrcamentos);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          orcamentos.map(orcamento => (
            <List.Item
              key={orcamento.key}
              title={orcamento.placa}
              description={orcamento.serviço}
              onPress={() => navigation.navigate('OrcamentoFormScreen', {
                edit: true,
                initialValues: orcamento,
              })}
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
      </ScrollView>
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('OrcamentoFormScreen'); }}
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
