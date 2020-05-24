import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Appbar, Colors } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Home from './Home';
import VeiculoFormScreen from './Veiculos/VeiculoFormScreen';
import CadastroCliente from './CadastroCliente';
import OrcamentoFormScreen from './Orcamentos/OrcamentoFormScreen';
import AgendamentoFormScreen from './Agendamentos/AgendamentoFormScreen';
import DespesaFormScreen from './Despesas/DespesaFormScreen';
import ServicoFormScreen from './Servicos/ServicoFormScreen';
import LembreteFormScreen from './Lembretes/LembreteFormScreen';
import theme from '../configs/theme';
import ListarVeiculo from './Veiculos/Listar';
import ListarOrcamento from './Orcamentos/Listar';
import ListarAgendamento from './Agendamentos/Listar';
import ListarDespesa from './Despesas/Listar';
import ListarServico from './Servicos/Listar';
import ListarLembrete from './Lembretes/Listar';
import Outros from './Outros';
import SobreNos from './SobreNos';
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
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: () => ({
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
      navigationOptions: ({ navigation }) => ({
        title: 'Agendamentos',
        headerLeft: (
          <Appbar.BackAction color={Colors.white} onPress={() => navigation.navigate('Outros')} />
        ),
      }),
    },
    AgendamentoFormScreen: {
      screen: AgendamentoFormScreen,
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: () => ({
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
      navigationOptions: ({ navigation }) => ({
        title: 'Despesas',
        headerLeft: (
          <Appbar.BackAction color={Colors.white} onPress={() => navigation.navigate('Outros')} />
        ),
      }),
    },
    DespesaFormScreen: {
      screen: DespesaFormScreen,
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: () => ({
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
      navigationOptions: ({ navigation }) => ({
        title: 'Serviços',
        headerLeft: (
          <Appbar.BackAction color={Colors.white} onPress={() => navigation.navigate('Outros')} />
        ),
      }),
    },
    ServicoFormScreen: {
      screen: ServicoFormScreen,
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: () => ({
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: Colors.white,
    }),
  },
);

const LembreteStack = createStackNavigator(
  {
    Listar: {
      screen: ListarLembrete,
      navigationOptions: ({ navigation }) => ({
        title: 'Lembretes',
        headerLeft: (
          <Appbar.BackAction color={Colors.white} onPress={() => navigation.navigate('Outros')} />
        ),
      }),
    },
    LembreteFormScreen: {
      screen: LembreteFormScreen,
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: () => ({
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
      navigationOptions: ({ navigation }) => ({
        title: 'Orçamentos',
        headerLeft: (
          <Appbar.BackAction color={Colors.white} onPress={() => navigation.navigate('Outros')} />
        ),
      }),
    },
    OrcamentoFormScreen: {
      screen: OrcamentoFormScreen,
    },
  },
  {
    initialRouteName: 'Listar',
    defaultNavigationOptions: () => ({
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: Colors.white,
    }),
  },
);

const OutrosStack = createStackNavigator(
  {
    Outros: {
      screen: Outros,
      navigationOptions: {
        title: 'Mais opções',
      },
    },
    Orcamento: {
      screen: OrcamentoStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Agendamento: {
      screen: AgendamentoStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Servico: {
      screen: ServicoStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Despesa: {
      screen: DespesaStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Lembrete: {
      screen: LembreteStack,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Outros',
    defaultNavigationOptions: () => ({
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

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="home" size={24} color={tintColor} />,
      },
    },
    Veiculo: {
      screen: VeiculoStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icones.CaminhaoIcone size={24} color={tintColor} />,
      },
    },
    Outros: {
      screen: OutrosStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="library-add" size={26} color={tintColor} />,
      },
    },
    SobreNos: {
      screen: SobreNos,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="information" size={24} color={tintColor} />,
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: Colors.white,
    inactiveColor: Colors.grey700,
    labeled: false,
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
