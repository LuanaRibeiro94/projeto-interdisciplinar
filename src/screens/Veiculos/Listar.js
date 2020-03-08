import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/Dialog';

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

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          veiculos.map(veiculo => (
            <List.Item
              key={veiculo.key}
              title={veiculo.marca}
              description={veiculo.placa}
              onPress={() => navigation.navigate('VeiculoFormScreen', {
                edit: true,
                initialValues: veiculo,
              })}
              right={props => (
                <Touchable
                  onPress={() => {
                    setItemSelecionado(veiculo.key);
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
});

export default Listar;
