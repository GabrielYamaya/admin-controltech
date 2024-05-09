import { Component } from '@angular/core';
import { Users } from '../../ativos/ativos/model/users';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponentSuccessfulDialogComponent } from '../../components/login-component-successful-dialog/login-component-successful-dialog.component';
import { UsersService } from '../../services/users.service';
import { LoginComponentFailDialogComponent } from '../../components/login-component-fail-dialog/login-component-fail-dialog.component';
import { error } from 'node:console';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  usuarioAuth: Users | null = null;
  loginSucess: boolean = false;

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

  async loginButton() {
    try {
        await this.fetchUser();
        if (this.formDataUser.login === this.usuarioAuth?.login && this.formDataUser.user_password === this.usuarioAuth.user_password) {
            console.log('Usuário autenticado com sucesso!');
            this.openSuccessDialog();
            setTimeout(() => {
                window.location.href = '/ativos';
            }, 2000);
        } 
    } catch (error) {
        this.openFailDialog();
              setTimeout(() => {
                  location.reload();
              }, 2000);
        console.error('Erro ao realizar login:', error);
        // Tratar o erro conforme necessário
    }
}

fetchUser(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        this.userService.getUserByUsername(this.formDataUser.login).subscribe(
            (usuarioAuth) => {
                this.usuarioAuth = usuarioAuth;
                console.log(this.usuarioAuth);
                resolve();
            },
            (error) => {
                reject(error);
            }
        );
    });
}
  redirectToCadastro() {
      // Redirecionar para a página de cadastro
      window.location.href = '/login/cadastrar';
  }
  openSuccessDialog() {
    this.dialog.open(LoginComponentSuccessfulDialogComponent, {
      width: '250px',
      data: {} // Dados opcionais para passar para o diálogo
    });
  }
  openFailDialog() {
    this.dialog.open(LoginComponentFailDialogComponent, {
      width: '250px',
      data: {}
    });
  }
}
