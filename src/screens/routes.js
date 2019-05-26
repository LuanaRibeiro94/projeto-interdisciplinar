import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Colors } from 'react-native-paper';
import Home from './Home';
import CadastroVeiculo from './CadastroVeiculo';
import CadastroCliente from './CadastroCliente';
import theme from '../configs/theme';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    CadastroCliente: {
      screen: CadastroCliente,
      navigationOptions: {
        title: 'Cadastro de cliente',
      },
    },
    CadastroVeiculo: {
      screen: CadastroVeiculo,
      navigationOptions: {
        title: 'Cadastro de veículo',
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
