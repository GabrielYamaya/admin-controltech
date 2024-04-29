import { Component } from '@angular/core';
import { Users } from '../../ativos/ativos/model/users';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponentSuccessfulDialogComponent } from '../../components/login-component-successful-dialog/login-component-successful-dialog.component';
import { UsersService } from '../../services/users.service';
import { LoginComponentFailDialogComponent } from '../../components/login-component-fail-dialog/login-component-fail-dialog.component';
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

  loginButton() {

    this.fetchUser();
    // Simulando lógica de autenticação
    if (this.formDataUser.login === this.usuarioAuth?.login && this.formDataUser.user_password === this.usuarioAuth.user_password) {
        console.log('Usuário autenticado com sucesso!');
        this.loginSucess =  true;
        if (this.loginSucess) {
          this.openSuccessDialog();
          
          setTimeout(() => {
            // Redirecionamento aqui
            window.location.href = '/ativos';
          }, 2000); // 2000 milissegundos = 2 segundos
        } else {
          this.loginSucess = false;
          this.openFailDialog();
          setTimeout(() => {
            // Redirecionamento aqui
            location.reload;
          }, 2000);
        }
      }
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
        data: {} // Dados opcionais para passar para o diálogo
      });
    }
    fetchUser() {
      this.userService.getUserByUsername(this.formDataUser.login).subscribe(usuarioAuth => {
        this.usuarioAuth = usuarioAuth;
        console.log(this.usuarioAuth)
      });
    }
}
