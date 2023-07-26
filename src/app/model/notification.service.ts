import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationIds: number[] = [];

  constructor() { }

  async scheduleNotification() {
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Ei! não esqueça de mim!',
          body: 'Hora de regar sua planta.',
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
