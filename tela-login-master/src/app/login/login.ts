import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  senha: string = '';

  entrar(): void {
    console.log('E-mail:', this.email);
    console.log('Senha:', this.senha);
  }

  criarConta(): void {
    console.log('Criar conta');
  }

  esqueciSenha(): void {
    console.log('Esqueci a senha');
  }
}