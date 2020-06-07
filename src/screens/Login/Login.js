import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from 'firebase';
import Footer from '../../components/Footer';
import LoginForm from './LoginForm';
import AlertDialog from '../../components/AlertDialog';

const Login = ({ navigation }) => {
  const [exibirDialog, setExibirDialog] = useState(false);

  const enviarFormulario = async ({ email, senha }) => {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(() => navigation.navigate('App'))
      .catch(() => setExibirDialog(true));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <LoginForm enviarFormulario={enviarFormulario} />
        <Footer handlePress={() => navigation.navigate('CadastroCliente')} />
      </View>
      <AlertDialog
        visible={exibirDialog}
        onDismiss={() => setExibirDialog(false)}
        title="Erro"
        content="Email ou senha incorretos."
        onConfirm={() => {}}
        acoes={(
          <>
            <Button onPress={() => setExibirDialog(false)}>OK</Button>
          </>
        )}
      />
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
