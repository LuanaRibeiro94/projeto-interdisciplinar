import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/Dialog';
import EmptyState from './EmptyState';

const Listar = ({ navigation }) => {
  const [veiculos, setVeiculos] = useState([]);
  const [exibirDialog, setExibirDialog] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState();
  const userId = firebase.auth().currentUser.uid;

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
  };

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
      />
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('VeiculoFormScreen'); }}
      />
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Apagar"
        content="Apagar item selecionado?"
        onConfirm={() => {
          firebase.database().ref('veiculos').child(userId).child(itemSelecionado)
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
