import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import BottomFAB from '../../components/BottomFAB';

const Listar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <List.Item
          title="Placa: BUS-9565"
          description="Borracheiro"
          onPress={() => {}}
          right={props => <List.Icon {...props} icon="more-vert" />}
        />
      </ScrollView>
      <BottomFAB
        icon="plus"
        onPress={() => { navigation.navigate('CadastroDespesa'); }}
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
