import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasPlantasPage } from './minhas-plantas.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasPlantasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasPlantasPageRoutingModule {}
