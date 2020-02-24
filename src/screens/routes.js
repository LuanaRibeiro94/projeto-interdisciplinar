import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Colors, Appbar } from 'react-native-paper';
import Home from './Home';
import VeiculoFormScreen from './Veiculos/VeiculoFormScreen';
import CadastroCliente from './CadastroCliente';
import OrcamentoFormScreen from './Orcamentos/OrcamentoFormScreen';
import AgendamentoFormScreen from './Agendamentos/AgendamentoFormScreen';
import DespesaFormScreen from './Despesas/DespesaFormScreen';
import theme from '../configs/theme';
import CadastroServico from './CadastroServico';
import ListarVeiculo from './Veiculos/Listar';
import ListarOrcamento from './Orcamentos/Listar';
import ListarAgendamento from './Agendamentos/Listar';
import ListarDespesa from './Despesas/Listar';
import ListarServico from './Servicos/Listar';
import MenuLateral from '../components/MenuLateral';
import * as Icones from '../components/Icones';
import Login from './Login';
import Splash from './Splash';

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
    VeiculoFormScreen: {
      screen: VeiculoFormScreen,
      navigationOptions: ({ navigation }) => ({
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
    OrcamentoFormScreen: {
      screen: OrcamentoFormScreen,
      navigationOptions: ({ navigation }) => ({
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
    Listar: {
      screen: ListarAgendamento,
      navigationOptions: {
        title: 'Agendamentos',
      },
    },
    AgendamentoFormScreen: {
      screen: AgendamentoFormScreen,
      navigationOptions: ({ navigation }) => ({
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
const DespesaStack = createStackNavigator(
  {
    Listar: {
      screen: ListarDespesa,
      navigationOptions: {
        title: 'Despesas',
      },
    },
    DespesaFormScreen: {
      screen: DespesaFormScreen,
      navigationOptions: ({ navigation }) => ({
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
    CadastroServico: {
      screen: CadastroServico,
      navigationOptions: ({ navigation }) => ({
        title: 'Cadastrar serviço',
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
    Veiculo: {
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
    Servico: {
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
      Splash,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
