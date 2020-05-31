import firebase from 'firebase';
import { Notifications } from 'expo';
import { agendarNotificacao, formatarData } from './notificacoes';

export const listarLembretes = () => {
  const userId = firebase.auth().currentUser.uid;

  return firebase.database().ref('lembretes').child(userId);
};

export const criarLembrete = async (valores) => {
  const userId = firebase.auth().currentUser.uid;
  const dataNotificacao = formatarData(valores.data, valores.hora);
  const notificacaoId = await agendarNotificacao(valores.descricao, dataNotificacao);

  firebase.database().ref('lembretes').child(userId).push({ ...valores, notificacaoId });
};

export const editarLembrete = async (key, valores) => {
  const userId = firebase.auth().currentUser.uid;
  const dataNotificacao = formatarData(valores.data, valores.hora);
  const notificacaoId = await agendarNotificacao(valores.descricao, dataNotificacao);

  await Notifications.cancelScheduledNotificationAsync(valores.notificacaoId);

  firebase.database().ref('lembretes').child(userId).child(key)
    .set({ ...valores, notificacaoId });
};

export const excluirLembrete = async (lembrete) => {
  const userId = firebase.auth().currentUser.uid;
  firebase.database().ref('lembretes').child(userId).child(lembrete.key)
    .remove();

  await Notifications.cancelScheduledNotificationAsync(lembrete.notificacaoId);
};
