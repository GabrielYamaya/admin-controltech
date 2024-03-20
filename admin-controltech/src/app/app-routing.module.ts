import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ativos'},
  {
    path: 'ativos',
    loadChildren: () => import('./ativos/ativos.module').then(m => m.AtivosModule)
  },
  {
    path: 'ambientes',
    loadChildren: () => import('./ambientes/ambientes.module').then(m => m.AmbientesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
