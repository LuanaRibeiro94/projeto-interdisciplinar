import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Divider, List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/Dialog';
import EmptyState from './EmptyState';

const Listar = ({ navigation }) => {
  const [servicos, setServicos] = useState([]);
  const [exibirDialog, setExibirDialog] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState();
  const userId = firebase.auth().currentUser.uid;

  useEffect(() => {
    const ref = firebase.database().ref('servicos').child(userId);

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

  const renderDespesa = ({ item }) => {
    return (
      <List.Item
        key={item.key}
        title={item.placa}
        description={item.descricao}
        onPress={() => navigation.navigate('ServicoFormScreen', {
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
        data={servicos}
        renderItem={renderDespesa}
        keyExtractor={item => item.key}
        ListEmptyComponent={<EmptyState />}
        contentContainerStyle={styles.flatlist}
        ItemSeparatorComponent={() => <Divider />}
      />
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('ServicoFormScreen'); }}
      />
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Excluir serviço?"
        content="Este serviço e todas suas informações serão excluídas. Você pode editá-lo caso deseje mudar algo."
        onConfirm={() => {
          firebase.database().ref('servicos').child(userId).child(itemSelecionado)
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
