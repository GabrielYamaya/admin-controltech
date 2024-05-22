import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisableNavBarGuard } from './guards/disable-nav-bar.guard';
import { LicencasComponent } from './licencas/licencas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ativos'},
  {
    path: 'ativos',
    loadChildren: () => import('./ativos/ativos.module').then(m => m.AtivosModule),
    canActivate: [DisableNavBarGuard]
  },
  {
    path: 'ambientes',
    loadChildren: () => import('./ambientes/ambientes.module').then(m => m.AmbientesModule),
    canActivate: [DisableNavBarGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [DisableNavBarGuard]
  },
  {
    path: 'licencas',
    component: LicencasComponent, canActivate: [DisableNavBarGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
