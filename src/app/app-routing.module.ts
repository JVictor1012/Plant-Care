import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'orientacoes',
    loadChildren: () => import('./paginas/orientacoes/orientacoes.module').then( m => m.OrientacoesPageModule)
  },
  {
    path: 'minhas-plantas',
    loadChildren: () => import('./paginas/minhas-plantas/minhas-plantas.module').then( m => m.MinhasPlantasPageModule)
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./paginas/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },  {
    path: 'camera',
    loadChildren: () => import('./paginas/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./paginas/alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./paginas/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
