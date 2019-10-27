import React, { useState } from 'react';
import firebase from 'firebase';
import { AppLoading } from 'expo';

const Splash = ({ navigation }) => {
  const [autenticado, setAutenticado] = useState(false);

  const getFirebaseAuth = () => {
    return new Promise((resolve, reject) => {
      try {
        firebase.auth().onAuthStateChanged(usuario => {
          if (usuario) setAutenticado(true);

          resolve();
        });
      } catch (e) {
        reject(e);
      }
    });
  };

  const redireciona = () => {
    if (autenticado) navigation.navigate('App');
    else navigation.navigate('Autenticacao');
  };

  return (
    <AppLoading
      autoHideSplash
      startAsync={getFirebaseAuth}
      onError={console.log}
      onFinish={redireciona}
    />
  );
};

export default Splash;
