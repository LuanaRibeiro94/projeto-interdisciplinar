/* eslint-disable import/prefer-default-export */
import firebase from 'firebase';

export const criarUsuario = async ({ email, senha, ...valores }) => {
  const resposta = await firebase.auth().createUserWithEmailAndPassword(email, senha);

  if (resposta?.user) {
    const { uid } = resposta.user;

    firebase.database().ref('usuarios').child(uid).set(valores);
  }
};

export const gerarMensagemDeErro = firebaseCode => {
  switch (firebaseCode) {
    case 'auth/email-already-in-use': return 'Email já está sendo utilizado por outro usuário.';
    case 'auth/weak-password': return 'Senha deve conter no mínimo 6 caracteres.';
    default: return 'Ocorreu um erro inesperado. Contate o suporte.';
  }
};
