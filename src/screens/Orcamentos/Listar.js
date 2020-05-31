import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/Dialog';
import LoadingModal from '../../components/LoadingModal';
import EmptyState from './EmptyState';
import { listarOrcamentos, excluirOrcamento } from '../../services/firebase/orcamentos';

const Listar = ({ navigation }) => {
  const [orcamentos, setOrcamentos] = useState([]);
  const [exibirDialog, setExibirDialog] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState();
  const [exibirModal, setExibirModal] = useState(true);

  useEffect(() => {
    const ref = listarOrcamentos();

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
    setExibirModal(false);
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
              setItemSelecionado(item);
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
        ItemSeparatorComponent={() => <Divider />}
      />
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('OrcamentoFormScreen'); }}
      />
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Excluir orçamento?"
        content="Este orçamento e todas suas informações serão excluídas. Você pode editá-lo caso deseje mudar algo."
        onConfirm={() => {
          excluirOrcamento(itemSelecionado);
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
