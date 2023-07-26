import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationIds: number[] = [];
  interval: any;

  constructor() { }

  startnotifications(nome: string) {
    // Inicia o intervalo para chamar o método scheduleNotification() a cada 10 segundos
    this.interval = setInterval(() => {
      this.scheduleNotification(nome);
    }, 10000); // 10000 milissegundos = 10 segundos
  }

  stopnotifications() {
    // Para o intervalo quando não quiser mais notificações periódicas
    clearInterval(this.interval);
  }

  async scheduleNotification(nome: string) {
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Ei! não esqueça de mim!',
          body: 'Hora de regar sua ' + nome + '!',
          id: this.notificationIds.length + 1,
          schedule: { at: new Date(Date.now() + 10000) }, // Notificação após 10 segundos
          //sound: null,
          //attachments: null,
          actionTypeId: '',
          extra: null
        }
      ]
    });

    this.notificationIds.push(notifs.notifications[0].id);


    console.log('Notificação agendada:', notifs);

    
  }

  async cancelAllNotifications() {
    for (const id of this.notificationIds) {
      await LocalNotifications.cancel({ notifications: [{ id }] });
    }
    this.notificationIds = []; 
  }
}
