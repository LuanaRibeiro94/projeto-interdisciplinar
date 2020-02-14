import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';

const Listar = ({ navigation }) => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const ref = firebase.database().ref('agendamentos');

    ref.on('value', onValueChange);

    return () => ref.off('value', onValueChange);
  }, []);

  const onValueChange = snapShot => {
    const dadosAgendamentos = [];

    snapShot.forEach(agendamento => {
      dadosAgendamentos.push({
        key: agendamento.key,
        ...agendamento.val(),
      });
    });

    setAgendamentos(dadosAgendamentos);
  };

  return (
    <View style={styles.container}>
      {
        agendamentos.map(agendamento => (
          <List.Item
            key={agendamento.key}
            title={agendamento.placa}
            description={agendamento.serviço}
            onPress={() => navigation.navigate('AgendamentoFormScreen', {
              edit: true,
              initialValues: agendamento,
            })}
            right={props => (
              <Touchable
                onPress={() => {
                  firebase.database().ref(`agendamentos/${agendamento.key}`).remove();
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
        onPress={() => { navigation.navigate('AgendamentoFormScreen'); }}
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
