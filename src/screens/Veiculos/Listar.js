import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Divider, List, Button } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/AlertDialog';
import LoadingModal from '../../components/LoadingModal';
import EmptyState from './EmptyState';

const Listar = ({ navigation }) => {
  const [veiculos, setVeiculos] = useState([]);
  const [exibirDialog, setExibirDialog] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState();
  const userId = firebase.auth().currentUser.uid;
  const [exibirModal, setExibirModal] = useState(true);

  useEffect(() => {
    const ref = firebase.database().ref('veiculos').child(userId);

    ref.on('value', onValueChange);

    return () => ref.off('value', onValueChange);
  }, []);

  const onValueChange = snapShot => {
    const dadosVeiculos = [];

    snapShot.forEach(veiculo => {
      dadosVeiculos.push({
        key: veiculo.key,
        ...veiculo.val(),
      });
    });

    setVeiculos(dadosVeiculos);
    setExibirModal(false);
  };

  const confirmDialog = () => {
    firebase.database().ref('veiculos').child(userId).child(itemSelecionado)
      .remove();
    setExibirDialog(false);
  };

  // eslint-disable-next-line react/prop-types
  const renderVeiculo = ({ item }) => {
    return (
      <List.Item
        title={item.marca}
        description={item.placa}
        onPress={() => navigation.navigate('VeiculoFormScreen', {
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
        data={veiculos}
        renderItem={renderVeiculo}
        keyExtractor={item => item.key}
        ListEmptyComponent={<EmptyState />}
        contentContainerStyle={styles.flatlist}
        ItemSeparatorComponent={() => <Divider />}
      />
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('VeiculoFormScreen'); }}
      />
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Excluir veículo?"
        content="Este veículo e todas suas informações serão excluídas. Você pode editá-lo caso deseje mudar algo."
        acoes={(
          <>
            <Button onPress={() => setExibirDialog(false)}>Cancelar</Button>
            <Button onPress={confirmDialog}>Apagar</Button>
          </>
        )}
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
