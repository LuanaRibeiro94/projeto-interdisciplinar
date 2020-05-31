import { Notifications } from 'expo';
import moment from 'moment';

export const agendarNotificacao = (body, time) => {
  return Notifications.scheduleLocalNotificationAsync(
    {
      title: 'Lembrete',
      body,
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      },
    },
    {
      time,
    },
  );
};

export const formatarData = (data, hora) => {
  const formato = 'DD/MM/YYYY HH:mm';
  const horario = moment().format(`${data} ${hora}`, formato);

  return moment(horario, formato).toDate();
};
