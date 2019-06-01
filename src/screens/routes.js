import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Colors } from 'react-native-paper';
import Home from './Home';
import CadastroVeiculo from './CadastroVeiculo';
import CadastroCliente from './CadastroCliente';
import Orcamento from './Orcamento';
import theme from '../configs/theme';

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
