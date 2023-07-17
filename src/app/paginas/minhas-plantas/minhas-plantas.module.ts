import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasPlantasPageRoutingModule } from './minhas-plantas-routing.module';

import { MinhasPlantasPage } from './minhas-plantas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasPlantasPageRoutingModule
  ],
  declarations: [MinhasPlantasPage]
})
export class MinhasPlantasPageModule {}
