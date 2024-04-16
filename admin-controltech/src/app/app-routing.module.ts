import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisableNavBarGuard } from './guards/disable-nav-bar.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ativos'},
  {
    path: 'ativos',
    loadChildren: () => import('./ativos/ativos.module').then(m => m.AtivosModule)
  },
  {
    path: 'ambientes',
    loadChildren: () => import('./ambientes/ambientes.module').then(m => m.AmbientesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canLoad: [DisableNavBarGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
