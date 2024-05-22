import { Component } from '@angular/core';
import { Users } from '../../ativos/ativos/model/users';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss'
})
export class CadastrarComponent {
  formDataUser: Users = {
    id_user: 0,
    nome: '',
    login: '',
    user_password: '',
    endereco: ''
  };
  errorM: string = 'Credenciais inválidas. Por favor, tente novamente.';

  constructor(
    private dialog: MatDialog,
    private userService: UsersService
  ) {}

  cadastrarButton(): void{}

}
