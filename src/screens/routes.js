import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Colors, Appbar } from 'react-native-paper';
import Home from './Home';
import CadastroVeiculo from './CadastroVeiculo';
import CadastroCliente from './CadastroCliente';
import Orcamento from './Orcamento';
import Agendamento from './Agendamento';
import theme from '../configs/theme';
import CadastroDespesa from './CadastroDespesa';
import StatusServicos from './StatusServicos';
import ListarVeiculo from './Veiculos/Listar';
import ListarOrcamento from './Orcamentos/Listar';
import ListarDespesa from './Despesas/Listar';
import ListarServico from './Servicos/Listar';
import MenuLateral from '../components/MenuLateral';
import * as Icones from '../components/Icones';
import Login from './Login';

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

const VeiculoStack = createStackNavigator(
  {
    Listar: {
      screen: ListarVeiculo,
      navigationOptions: {
        title: 'Veículos',
      },
    },
    CadastroVeiculo: {
      screen: CadastroVeiculo,
      navigationOptions: ({ navigation }) => ({
        title: 'Cadastro de veículo',
        headerLeft: (
          <Appbar.BackAction color={Colors.white} onPress={() => navigation.goBack()} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <Appbar.Action icon="menu" color={Colors.white} onPress={() => navigation.openDrawer()} />,
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: Colors.white,
    }),
  },
);

const OrcamentoStack = createStackNavigator(
  {
    Listar: {
      screen: ListarOrcamento,
      navigationOptions: {
        title: 'Orçamentos',
      },
    },
    SolicitarOrcamento: {
      screen: Orcamento,
      navigationOptions: ({ navigation }) => ({
        title: 'Solicitar orçamento',
        headerLeft: (
          <Appbar.BackAction color={Colors.white} onPress={() => navigation.goBack()} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <Appbar.Action icon="menu" color={Colors.white} onPress={() => navigation.openDrawer()} />,
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: Colors.white,
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
    Listar: {
      screen: ListarDespesa,
      navigationOptions: {
        title: 'Despesas',
      },
    },
    CadastroDespesa: {
      screen: CadastroDespesa,
      navigationOptions: ({ navigation }) => ({
        title: 'Cadastrar despesa',
        headerLeft: (
          <Appbar.BackAction color={Colors.white} onPress={() => navigation.goBack()} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <Appbar.Action icon="menu" color={Colors.white} onPress={() => navigation.openDrawer()} />,
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: Colors.white,
    }),
  },
);
const ServicoStack = createStackNavigator(
  {
    Listar: {
      screen: ListarServico,
      navigationOptions: {
        title: 'Serviços',
      },
    },
    Servico: {
      screen: StatusServicos,
      navigationOptions: {
        title: 'Status de serviços',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: Colors.white,
      },
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <Appbar.Action icon="menu" color={Colors.white} onPress={() => navigation.openDrawer()} />,
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: Colors.white,
    }),
  },
);

const AutenticacaoStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
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
});

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: 'Início',
        drawerIcon: 'home',
      },
    },
    CadastroVeiculo: {
      screen: VeiculoStack,
      navigationOptions: {
        drawerLabel: 'Veículos',
        drawerIcon: (size, color) => <Icones.CaminhaoIcone size={size} color={color} />,
      },
    },
    Orcamento: {
      screen: OrcamentoStack,
      navigationOptions: {
        drawerLabel: 'Orçamentos',
        drawerIcon: (size, color) => <Icones.OrcamentoIcone size={size} color={color} />,
      },
    },
    Agendamento: {
      screen: AgendamentoStack,
      navigationOptions: {
        drawerLabel: 'Agendamentos',
        drawerIcon: (size, color) => <Icones.AgendamentoIcone size={size} color={color} />,
      },
    },
    Despesa: {
      screen: DespesaStack,
      navigationOptions: {
        drawerLabel: 'Despesas',
        drawerIcon: (size, color) => <Icones.DespesaIcone size={size} color={color} />,
      },
    },
    StatusServicos: {
      screen: ServicoStack,
      navigationOptions: {
        drawerLabel: 'Serviços',
        drawerIcon: (size, color) => <Icones.ServicoIcone size={size} color={color} />,
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: MenuLateral,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: Colors.white,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppNavigator,
      Autenticacao: AutenticacaoStack,
    },
    {
      initialRouteName: 'Autenticacao',
    },
  ),
);
