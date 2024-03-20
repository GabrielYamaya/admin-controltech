import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ativos } from '../model/ativos';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-dialog-crud',
  templateUrl: './dialog-crud.component.html',
  styleUrl: './dialog-crud.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class DialogCrudComponent implements OnInit {

  formData: Ativos = {
    id: 0,
    nome: '',
    qtdEstoque: 0,
    valorItem: 0,
    data_aquisicao: new Date(), // Inicializado com a data atual
    statusAtivo: '',
    descricao: ''
  };

  constructor(
    public dialogRef : MatDialogRef<DialogCrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}
  ngOnInit(): void{

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  saveProduct(): void {
    //logica salvar dados
  }
}
