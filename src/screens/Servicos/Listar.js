import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import BottomFAB from '../../components/BottomFAB';

const Listar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <List.Item
        title="Troca de óleo"
        description="Placa: BUS-9565"
        onPress={() => {}}
        right={props => <List.Icon {...props} icon="more-vert" />}
      />
      <BottomFAB
        icon="add"
        onPress={() => { navigation.navigate(''); }}
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
