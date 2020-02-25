import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';

const Listar = ({ navigation }) => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const ref = firebase.database().ref('servicos');

    ref.on('value', onValueChange);

    return () => ref.off('value', onValueChange);
  }, []);

  const onValueChange = snapShot => {
    const dadosServicos = [];

    snapShot.forEach(servico => {
      dadosServicos.push({
        key: servico.key,
        ...servico.val(),
      });
    });

    setServicos(dadosServicos);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          servicos.map(servico => (
            <List.Item
              key={servico.key}
              title={servico.placa}
              description={servico.descricao}
              onPress={() => navigation.navigate('ServicoFormScreen', {
                edit: true,
                initialValues: servico,
              })}
              right={props => (
                <Touchable
                  onPress={() => {
                    firebase.database().ref(`servicos/${servico.key}`).remove();
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
        onPress={() => { navigation.navigate('ServicoFormScreen'); }}
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
