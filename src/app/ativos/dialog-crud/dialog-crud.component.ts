import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ativos } from '../ativos/model/ativos';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Categoria } from '../ativos/model/categoria';
import { CategoriaServiceService } from '../../services/categoria-service.service';
import { Users } from '../ativos/model/users';
import { UsersService } from '../../services/users.service';
import { AtivosService } from '../../services/ativos.service';
import { AtivoFisico } from '../ativos/model/ativoFisico';
import { AtivoMiddle } from '../ativos/model/ativoMiddle';
import { response } from 'express';
import { LocalArmazenado } from '../ativos/model/localArmazenado';
import { LocaisService } from '../../services/locais.service';
@Component({
  selector: 'app-dialog-crud',
  templateUrl: './dialog-crud.component.html',
  styleUrl: './dialog-crud.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class DialogCrudComponent implements OnInit {
  selectedType: String = '';
  url: String = ''

  dataMiddle: AtivoMiddle = {
    ativos: null,
    ativoFisico: null,
    software: null,
    usuario: null,
    local: null
  };

  formDataAtivo: Ativos = {    
    id: null,
    nome: 'Produto A', 
    qntEstoque: 10, 
    valorItem: 50, 
    statusAtivo: 'Ativo', 
    data_aquisicao: new Date('2022-01-01'),
    descricao: 'Este é o Produto A',
    localArmazenado: null
  };
  formDataLocal: LocalArmazenado = {
   id: 0,
   nomelocal: 'a',
   endereco: '',
   descricao: '',
   subLocal: null
  }

  formDataCategoria: any = {
    id :0,
    nome: ""
  };

  formDataFisico: AtivoFisico = {
    id_ativo: 0,
    id_user: 0,
    id_produto: 0,
  }
  formDataUser: Users = {
    id_user: 0,
    nome: '',
    login: '',
    user_password: '',
    endereco: ''
  };
  formDataSoftware: any = {
    id: 1,
    versao: '',
    data_expira: new Date('2022-01-01'),
    n_licenca: '',
    tipo_OS: '',
    id_produto: 0
  };
  usuarios: Users[] = [];
  categorias: Categoria[] = [];
  fornecedores: any[] = [];
  isAtivoFisico: boolean = false;
  locais: LocalArmazenado[] = [];

  dataToEnviar: AtivoMiddle = {
    ativos: null,
    ativoFisico: null,
    software: null,
    usuario: null,
    local: null
  }
  constructor(
    public dialogRef : MatDialogRef<DialogCrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoriaService: CategoriaServiceService,
    private userService: UsersService,
    private ativoService: AtivosService,
    private localService: LocaisService
  ){

  }

  ngOnInit(): void{
    this.getCategorias();
    this.getUsers();
    this.getLocais();
  }
  getLocais() {
      this.localService.getLocais().subscribe(locais => {
        this.locais = locais;
        console.log(this.locais);
      });
    }
  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    })
  }
  getUsers(): void {
    this.userService.getUsers().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  updateSelectedType(type: string): void {
    this.selectedType = type;
  }

  saveProduct(): void {

    this.formDataAtivo.localArmazenado = this.formDataLocal;
    this.dataToEnviar.ativos = this.formDataAtivo;
    this.dataToEnviar.ativoFisico = this.formDataFisico;
    this.dataToEnviar.software = this.formDataSoftware;
    this.dataToEnviar.usuario = this.formDataUser;
    console.log('Id usuario ' + this.dataToEnviar.usuario.id_user);
    console.log('local => ' + this.formDataLocal)
    console.log(this.selectedType);
    this.dataMiddle.ativos = this.formDataAtivo;
    this.dataMiddle.ativoFisico = this.formDataFisico;

    this.formDataAtivo.data_aquisicao = this.formDataAtivo.data_aquisicao.toISOString();
    console.log(this.formDataAtivo.data_aquisicao)
    this.dataToEnviar.ativos = this.formDataAtivo;
    this.dataToEnviar.ativoFisico = this.formDataFisico;
    this.dataToEnviar.software = this.formDataSoftware;
    this.dataToEnviar.local = this.formDataLocal;

    if(this.selectedType === 'software'){
      this.ativoService.saveSoftware(this.dataToEnviar).subscribe(
        response => {
          console.log("Salvou Software", response);
        }
      )
    } else if( this.selectedType === 'ativoFisico'){
      this.ativoService.saveAtivoFisico(this.dataToEnviar).subscribe(
        response => {
          console.log("Salvo",response)
        },
        error => {
          console.error('erro', error)
        }
      )
    }
  }

}
