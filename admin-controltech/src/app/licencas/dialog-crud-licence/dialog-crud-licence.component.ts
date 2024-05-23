import { Component, Inject, OnInit } from '@angular/core';
import { Users } from '../../ativos/ativos/model/users';
import { Software } from '../../ativos/ativos/model/software';
import { UsersService } from '../../services/users.service';
import { AtivosService } from '../../services/ativos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Licenca } from '../../ativos/ativos/model/licenca';
import { DialogCrudComponent } from '../../ativos/dialog-crud/dialog-crud.component';
import { response } from 'express';
@Component({
  selector: 'app-dialog-crud-licence',
  templateUrl: './dialog-crud-licence.component.html',
  styleUrl: './dialog-crud-licence.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class DialogCrudLicenceComponent implements OnInit {
  usuarios: Users[] = [];
  softwares: Software[] = [];

  formDataLicenca: Licenca = {
    id_licenca: 0,
    chave: '',
    observacoes: '',
    software: null,
    usuario: null
  }

  formDataSoftware: any = {
    id: 1,
    versao: '',
    data_expira: new Date('2022-01-01'),
    n_licenca: '',
    tipo_OS: '',
    id_produto: 0
  };
  formDataUser: Users = {
    id_user: 0,
    nome: '',
    login: '',
    user_password: '',
    endereco: ''
  };

  constructor(    
    public dialogRef : MatDialogRef<DialogCrudComponent>,
    private userService: UsersService,
    private ativoService: AtivosService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ){ }
  
  ngOnInit(): void{
    this.getUsers();
    this.getSoftwares();

  }

  getUsers(): void {
    this.userService.getUsers().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    })
  }
  getSoftwares():void {
    this.ativoService.getAllSoftware().subscribe(softwares => {
      this.softwares = softwares;
      console.log(softwares);
    })
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  saveLicenca(): void {
    this.formDataLicenca.software = this.formDataSoftware;
    this.formDataLicenca.usuario = this.formDataUser;
    this.ativoService.saveLicenca(this.formDataLicenca).subscribe(
      response => {
        console.log("Salvou Licenca", response);
      }
    );
  }

}
