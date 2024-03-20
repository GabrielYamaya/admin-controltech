import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ativos } from '../ativos/model/ativos';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Categoria } from '../ativos/model/categoria';
import { CategoriaServiceService } from '../../services/categoria-service.service';
@Component({
  selector: 'app-dialog-crud',
  templateUrl: './dialog-crud.component.html',
  styleUrl: './dialog-crud.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class DialogCrudComponent implements OnInit {
  formData: any = {    id: 1, 
    nome: 'Produto A', 
    qntEstoque: 10, 
    valorItem: 50, 
    statusAtivo: 'Ativo', 
    data_aquisicao: new Date('2022-01-01'),
    descricao: 'Este é o Produto A',
    idLocalArmazenado: 0};
  categorias: Categoria[] = [];
  fornecedores: any[] = [];
  isAtivoFisico: boolean = false;

  constructor(
    public dialogRef : MatDialogRef<DialogCrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoriaService: CategoriaServiceService
  ){

  }

  ngOnInit(): void{
    this.getCategorias();
  }
  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    })
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  saveProduct(): void {
    //logica salvar dados
  }
}
