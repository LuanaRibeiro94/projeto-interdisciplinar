import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/Dialog';

const Listar = ({ navigation }) => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [exibirDialog, setExibirDialog] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState();


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
      <ScrollView>
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
                    setItemSelecionado(agendamento.key);
                    setExibirDialog(true);
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
        onPress={() => { navigation.navigate('AgendamentoFormScreen'); }}
      />
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Apagar"
        content="Apagar item selecionado?"
        onConfirm={() => {
          firebase.database().ref(`agendamentos/${itemSelecionado}`).remove();
          setExibirDialog(false);
        }}
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
