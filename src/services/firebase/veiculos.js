import firebase from 'firebase';

const getRef = () => {
  const userId = firebase.auth().currentUser.uid;

  return firebase.database().ref('veiculos').child(userId);
};

// eslint-disable-next-line import/prefer-default-export
export const getPlacas = async () => {
  const placas = [];

  const snapShot = await getRef().once('value');
  snapShot.forEach(veiculo => {
    placas.push({ value: veiculo.val().placa });
  });

  return placas;
};
