import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbientesComponent } from './ambientes/ambientes.component';
const routes: Routes = [
  {path: '', component: AmbientesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbientesRoutingModule { }
