import firebase from 'firebase';

export const uploadArquivo = async (ref, uri) => {
  const blob = await gerarBlob(uri);
  firebase.storage().ref(ref).put(blob);
};

export const removerArquivo = async (path) => {
  firebase.storage().ref(path).delete();
};

const gerarBlob = async uri => {
  return (await fetch(uri)).blob();
};
