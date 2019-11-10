import firebase from 'firebase';

const getRef = () => firebase.database().ref('/veiculos');

// eslint-disable-next-line import/prefer-default-export
export const getPlacas = async () => {
  const placas = [];

  const snapShot = await getRef().once('value');
  snapShot.forEach(veiculo => {
    placas.push({ value: veiculo.val().placa });
  });

  return placas;
};
