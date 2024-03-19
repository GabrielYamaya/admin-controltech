import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosComponent } from './ativos/ativos.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AtivosComponent
  ],
  imports: [
    CommonModule,
    AtivosRoutingModule,
    MatTableModule
  ]
})
export class AtivosModule { }
