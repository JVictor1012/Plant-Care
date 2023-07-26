import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToPlantas() {
    this.navCtrl.navigateForward('/minhas-plantas');
  }


  goToOrientacoes() {
    this.navCtrl.navigateForward('/orientacoes');
  }

  goToCamera(){
    this.navCtrl.navigateForward('/camera')
  }

  goToalertas(){
    this.navCtrl.navigateForward('/alertas')
  }

  goToconfiguracoes(){
    this.navCtrl.navigateForward('/configuracoes')
  }



  //navigateMinhasPlantas(){
    //this.router.navigate(['/minhas-plantas']);
  //}

}
