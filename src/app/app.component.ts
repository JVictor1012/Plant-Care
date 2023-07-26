import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'Home' },
    { title: 'Orientações', url: '/orientacoes', icon: 'book' },
    { title: 'Minhas Plantas', url: '/minhas-plantas', icon: 'leaf' },
    { title: 'Configurações', url: '/configuracoes', icon: 'cog' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
