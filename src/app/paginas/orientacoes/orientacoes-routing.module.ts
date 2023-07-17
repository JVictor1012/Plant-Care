import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrientacoesPage } from './orientacoes.page';

const routes: Routes = [
  {
    path: '',
    component: OrientacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrientacoesPageRoutingModule {}
