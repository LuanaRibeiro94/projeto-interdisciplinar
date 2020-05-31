import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Divider, List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/Dialog';
import LoadingModal from '../../components/LoadingModal';
import EmptyState from './EmptyState';

const Listar = ({ navigation }) => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [exibirDialog, setExibirDialog] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState();
  const userId = firebase.auth().currentUser.uid;
  const [exibirModal, setExibirModal] = useState(true);

  useEffect(() => {
    const ref = firebase.database().ref('agendamentos').child(userId);

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
    setExibirModal(false);
  };

  const renderAgendamento = ({ item }) => {
    return (
      <List.Item
        key={item.key}
        title={item.placa}
        description={item.serviço}
        onPress={() => navigation.navigate('AgendamentoFormScreen', {
          edit: true,
          initialValues: item,
        })}
        right={props => (
          <Touchable
            onPress={() => {
              setItemSelecionado(item.key);
              setExibirDialog(true);
            }}
            background={Touchable.Ripple('rgba(0, 0, 0, 0.2)', true)}
          >
            <List.Icon {...props} icon="close" />
          </Touchable>
        )
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={agendamentos}
        renderItem={renderAgendamento}
        keyExtractor={item => item.key}
        ListEmptyComponent={<EmptyState />}
        contentContainerStyle={styles.flatlist}
        ItemSeparatorComponent={() => <Divider />}
      />
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('AgendamentoFormScreen'); }}
      />
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Excluir agendamento?"
        content="Este agendamento e todas suas informações serão excluídas. Você pode editá-lo caso deseje mudar algo."
        onConfirm={() => {
          firebase.database().ref('agendamentos').child(userId).child(itemSelecionado)
            .remove();
          setExibirDialog(false);
        }}
      />
      <LoadingModal visible={exibirModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  flatlist: {
    flexGrow: 1,
  },
});

export default Listar;
