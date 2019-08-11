import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Drawer } from 'react-native-paper';
import Itens from './Itens';

export const MenuLateral = props => {
  return (
    <ScrollView>
      <SafeAreaView
        style={{ flex: 1 }}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <Drawer.Section>
          <Itens {...props} />
        </Drawer.Section>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MenuLateral;
