import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import BottomFAB from '../../components/BottomFAB';
import AlertDialog from '../../components/Dialog';

const Listar = ({ navigation }) => {
  const [lembretes, setLembretes] = useState([]);
  const [exibirDialog, setExibirDialog] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState();

  useEffect(() => {
    const ref = firebase.database().ref('lembretes');

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

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          lembretes.map(lembrete => (
            <List.Item
              key={lembrete.key}
              title={lembrete.placa}
              description={lembrete.placa}
              onPress={() => navigation.navigate('LembreteFormScreen', {
                edit: true,
                initialValues: lembrete,
              })}
              right={props => (
                <Touchable
                  onPress={() => {
                    setItemSelecionado(lembrete.key);
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
        onPress={() => { navigation.navigate('LembreteFormScreen'); }}
      />
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Apagar"
        content="Apagar item selecionado?"
        onConfirm={() => {
          firebase.database().ref(`lembretes/${itemSelecionado}`).remove();
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
