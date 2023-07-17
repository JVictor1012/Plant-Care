import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrientacoesPageRoutingModule } from './orientacoes-routing.module';

import { OrientacoesPage } from './orientacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrientacoesPageRoutingModule
  ],
  declarations: [OrientacoesPage]
})
export class OrientacoesPageModule {}
