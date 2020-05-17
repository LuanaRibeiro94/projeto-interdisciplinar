import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/Dialog';
import EmptyState from './EmptyState';

const Listar = ({ navigation }) => {
  const [orcamentos, setOrcamentos] = useState([]);
  const [exibirDialog, setExibirDialog] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState();
  const userId = firebase.auth().currentUser.uid;

  useEffect(() => {
    const ref = firebase.database().ref('orcamentos').child(userId);

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

  const renderOrcamento = ({ item }) => {
    return (
      <List.Item
        title={item.placa}
        description={item.servico}
        onPress={() => navigation.navigate('OrcamentoFormScreen', {
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
        data={orcamentos}
        renderItem={renderOrcamento}
        keyExtractor={item => item.key}
        ListEmptyComponent={<EmptyState />}
        contentContainerStyle={styles.flatlist}
      />
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('OrcamentoFormScreen'); }}
      />
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Apagar"
        content="Apagar item selecionado?"
        onConfirm={() => {
          firebase.database().ref('orcamentos').child(userId).child(itemSelecionado)
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
