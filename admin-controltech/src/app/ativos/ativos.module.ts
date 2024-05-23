import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosComponent } from './ativos/ativos.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DialogCrudComponent } from './dialog-crud/dialog-crud.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import {MatSelectModule} from '@angular/material/select';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    AtivosComponent,
    DialogCrudComponent,
    
  ],
  imports: [
    CommonModule,
    AtivosRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    AppModule
  ]
})
export class AtivosModule { }
