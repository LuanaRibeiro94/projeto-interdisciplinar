import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import CadastroVeiculo from './CadastroVeiculo';
import CadastroCliente from './CadastroCliente';
import theme from '../configs/theme';
import { Colors } from 'react-native-paper';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    CadastroCliente: {
      screen: CadastroCliente,
      navigationOptions: {
        title:'Cadastro de cliente'
      }
    },
    CadastroVeiculo: {
      screen: CadastroVeiculo,
      navigationOptions: {
        title: 'Cadastro de veículo'
      }
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary
      },
      headerTintColor: Colors.white
    }
  }
);

export default createAppContainer(AppNavigator);