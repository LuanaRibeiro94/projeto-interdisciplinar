import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Colors, Appbar } from 'react-native-paper';
import Home from './Home';
import CadastroVeiculo from './CadastroVeiculo';
import CadastroCliente from './CadastroCliente';
import Orcamento from './Orcamento';
import Agendamento from './Agendamento';
import theme from '../configs/theme';
import CadastroDespesa from './CadastroDespesa';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
  },
);

const ClienteStack = createStackNavigator(
  {
    CadastroCliente: {
      screen: CadastroCliente,
      navigationOptions: {
        title: 'Cadastro de cliente',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: Colors.white,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <Appbar.Action icon="menu" color={Colors.white} onPress={() => navigation.openDrawer()} />,
    }),
  },
);

const VeiculoStack = createStackNavigator(
  {
    CadastroVeiculo: {
      screen: CadastroVeiculo,
      navigationOptions: {
        title: 'Cadastro de veículo',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: Colors.white,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <Appbar.Action icon="menu" color={Colors.white} onPress={() => navigation.openDrawer()} />,
    }),
  },
);

const OrcamentoStack = createStackNavigator(
  {
    Orcamento: {
      screen: Orcamento,
      navigationOptions: {
        title: 'Solicitar orçamento',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: Colors.white,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <Appbar.Action icon="menu" color={Colors.white} onPress={() => navigation.openDrawer()} />,
    }),
  },
);

const AgendamentoStack = createStackNavigator(
  {
    Agendamento: {
      screen: Agendamento,
      navigationOptions: {
        title: 'Solicitar agendamento',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: Colors.white,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <Appbar.Action icon="menu" color={Colors.white} onPress={() => navigation.openDrawer()} />,
    }),
  },
);
const DespesaStack = createStackNavigator(
  {
    Despesa: {
      screen: CadastroDespesa,
      navigationOptions: {
        title: 'Cadastrar despesa',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: Colors.white,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <Appbar.Action icon="menu" color={Colors.white} onPress={() => navigation.openDrawer()} />,
    }),
  },
);

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: 'Início',
      },
    },
    Clientes: {
      screen: ClienteStack,
      navigationOptions: {
        drawerLabel: 'Clientes',
      },
    },
    CadastroVeiculo: {
      screen: VeiculoStack,
      navigationOptions: {
        drawerLabel: 'Veículos',
      },
    },
    Orcamento: {
      screen: OrcamentoStack,
      navigationOptions: {
        drawerLabel: 'Orçamentos',
      },
    },
    Agendamento: {
      screen: AgendamentoStack,
      navigationOptions: {
        drawerLabel: 'Agendamentos',
      },
    },
    Despesa: {
      screen: DespesaStack,
      navigationOptions: {
        drawerLabel: 'Despesas',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: Colors.white,
    },
  },
);

export default createAppContainer(AppNavigator);
