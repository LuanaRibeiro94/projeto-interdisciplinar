import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Drawer, Divider } from 'react-native-paper';
import firebase from 'firebase';
import Itens from './Itens';

export const MenuLateral = props => {
  const sair = () => {
    firebase.auth().signOut();
    props.navigation.navigate('Autenticacao');
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={{ flex: 1 }}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <Drawer.Section>
          <Itens {...props} />
          <Divider />
          <Drawer.Item
            label="Sair"
            icon="exit-to-app"
            onPress={sair}
          />
        </Drawer.Section>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MenuLateral;
