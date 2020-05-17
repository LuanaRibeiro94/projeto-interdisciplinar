import firebase from 'firebase';
import { uploadArquivo, removerArquivo } from '.';

export const listarOrcamentos = () => {
  const userId = firebase.auth().currentUser.uid;

  return firebase.database().ref('orcamentos').child(userId);
};

export const criarOrcamento = async (valores) => {
  const userId = firebase.auth().currentUser.uid;
  const { anexo: { uri } } = valores;
  const { key } = firebase.database().ref('orcamentos').child(userId).push(valores);

  if (uri) uploadArquivo(`orcamentos/${userId}/${key}`, uri);
};

export const editarOrcamento = async (key, valores) => {
  const userId = firebase.auth().currentUser.uid;
  const { anexo: { uri } } = valores;
  firebase.database().ref('orcamentos').child(userId).child(key)
    .set(valores);

  if (uri) uploadArquivo(`orcamentos/${userId}/${key}`, uri);
};

export const excluirOrcamento = async (orcamento) => {
  const userId = firebase.auth().currentUser.uid;
  const { anexo: { uri } } = orcamento;

  firebase.database().ref('orcamentos').child(userId).child(orcamento.key)
    .remove();
  if (uri) removerArquivo(`orcamentos/${userId}/${orcamento.key}`);
};
