import { Component } from '@angular/core';
import { Users } from '../../ativos/ativos/model/users';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponentSuccessfulDialogComponent } from '../../components/login-component-successful-dialog/login-component-successful-dialog.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  usuarioAuth: Users | null = null;

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
        const loginSuccessful = true;
        if (loginSuccessful) {
          this.openSuccessDialog();
          
          setTimeout(() => {
            // Redirecionamento aqui
            window.location.href = '/ativos';
          }, 2000); // 2000 milissegundos = 2 segundos
        } else {
          
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
    fetchUser() {
      this.userService.getUserByUsername(this.formDataUser.login).subscribe(usuarioAuth => {
        this.usuarioAuth = usuarioAuth;
        console.log(this.usuarioAuth)
      });
    }
}
