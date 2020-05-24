import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Divider, List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/Dialog';
import EmptyState from './EmptyState';

const Listar = ({ navigation }) => {
  const [lembretes, setLembretes] = useState([]);
  const [exibirDialog, setExibirDialog] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState();
  const userId = firebase.auth().currentUser.uid;

  useEffect(() => {
    const ref = firebase.database().ref('lembretes').child(userId);

    ref.on('value', onValueChange);

    return () => ref.off('value', onValueChange);
  }, []);

  const onValueChange = snapShot => {
    const dadosLembretes = [];

    snapShot.forEach(lembrete => {
      dadosLembretes.push({
        key: lembrete.key,
        ...lembrete.val(),
      });
    });

    setLembretes(dadosLembretes);
  };

  const renderLembrete = ({ item }) => {
    return (
      <List.Item
        key={item.key}
        title={item.placa}
        description={`${item.descricao} - ${item.data}`}
        onPress={() => navigation.navigate('LembreteFormScreen', {
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
        data={lembretes}
        renderItem={renderLembrete}
        keyExtractor={item => item.key}
        ListEmptyComponent={<EmptyState />}
        contentContainerStyle={styles.flatlist}
        ItemSeparatorComponent={() => <Divider />}
      />
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('LembreteFormScreen'); }}
      />
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Excluir lembrete?"
        content="Este lembrete e todas suas informações serão excluídas. Você pode editá-lo caso deseje mudar algo."
        onConfirm={() => {
          firebase.database().ref('lembretes').child(userId).child(itemSelecionado)
            .remove();
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
  flatlist: {
    flexGrow: 1,
  },
});

export default Listar;
