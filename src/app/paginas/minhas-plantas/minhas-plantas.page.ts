import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/model/notification.service';

@Component({
  selector: 'app-minhas-plantas',
  templateUrl: './minhas-plantas.page.html',
  styleUrls: ['./minhas-plantas.page.scss'],
})
export class MinhasPlantasPage {

  notificacoesAtivadas: boolean = false;

  constructor(private service : NotificationService) { 
    
  }

  ativarNotificacoes() {
    if (this.notificacoesAtivadas) {
      // Ativar as notificações
      this.service.scheduleNotification();
    } else {
      // Desativar as notificações
      this.service.cancelAllNotifications();
    }
  }

}
