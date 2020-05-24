import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import firebase from 'firebase';
import * as Icones from '../components/Icones';

const Outros = ({ navigation }) => {
  const sair = () => {
    firebase.auth().signOut();
    navigation.navigate('Autenticacao');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <List.Item
          title="Orçamentos"
          onPress={() => navigation.navigate('Orcamento')}
          left={({ color }) => (
            <Icones.OrcamentoIcone style={styles.icon} size={24} color={color} />
          )}
        />
        <List.Item
          title="Agendamentos"
          onPress={() => navigation.navigate('Agendamento')}
          left={({ color }) => (
            <Icones.AgendamentoIcone style={styles.icon} size={24} color={color} />
          )}
        />
        <List.Item
          title="Serviços"
          onPress={() => navigation.navigate('Servico')}
          left={({ color }) => <Icones.ServicoIcone style={styles.icon} size={24} color={color} />}
        />
        <List.Item
          title="Despesas"
          onPress={() => navigation.navigate('Despesa')}
          left={({ color }) => <Icones.DespesaIcone style={styles.icon} size={24} color={color} />}
        />
        <List.Item
          title="Lembretes"
          onPress={() => navigation.navigate('Lembrete')}
          left={({ color }) => <Icones.LembreteIcone style={styles.icon} size={24} color={color} />}
        />
      </View>
      <View>
        <Divider />
        <List.Item
          title="Sair"
          onPress={sair}
          left={({ color }) => <List.Icon icon="exit-to-app" style={styles.exitIcon} color={color} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  icon: {
    margin: 8,
  },
  exitIcon: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

export default Outros;
