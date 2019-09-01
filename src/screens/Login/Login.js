import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Footer from '../../components/Footer';
import LoginForm from './LoginForm';

const Login = ({ navigation }) => {
  const enviarFormulario = ({ email, senha }) => {
    if (email === 'teste@teste.com' && senha === '123456') {
      navigation.navigate('App');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <LoginForm enviarFormulario={enviarFormulario} />
        <Footer handlePress={() => navigation.navigate('CadastroCliente')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
});

export default Login;
