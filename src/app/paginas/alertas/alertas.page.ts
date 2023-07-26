import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/model/notification.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage {

  notificacoesCinas: boolean = false;
  notificacoesSuculenta: boolean = false;
  notificacoesSamambaia: boolean = false;
  notificacoesEspada: boolean = false;

  constructor(private service: NotificationService) { }

  ativarNotificacoes(nome: string) {
    if (this.notificacoesCinas || this.notificacoesSuculenta || this.notificacoesSamambaia || this.notificacoesEspada) {
      // Ativar as notificações
      this.service.startnotifications(nome);
    } else {
      // Desativar as notificações
      this.service.stopnotifications();
    }
  }

}
