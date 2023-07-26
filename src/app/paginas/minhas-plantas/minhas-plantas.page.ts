import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/model/notification.service';

@Component({
  selector: 'app-minhas-plantas',
  templateUrl: './minhas-plantas.page.html',
  styleUrls: ['./minhas-plantas.page.scss'],
})
export class MinhasPlantasPage {

  notificacoesAtivadas: boolean = false;
  nome = "cineraria"

  constructor(private service : NotificationService) { 
    
  }

  ativarNotificacoes() {
    if (this.notificacoesAtivadas) {
      // Ativar as notificações
      this.service.startnotifications(this.nome);
    } else {
      // Desativar as notificações
      this.service.stopnotifications();
    }
  }

}
