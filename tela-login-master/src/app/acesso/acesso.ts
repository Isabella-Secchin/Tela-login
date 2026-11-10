import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acesso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './acesso.html',
  styleUrl: './acesso.css'
})
export class Acesso {
  permissao: string = '';
  usuarios: string[] = ['root', 'admin', 'visitante'];
  podeEntrar: boolean = false;
  mensagem: string = '';

  onLogando(valor: string): void {
    this.permissao = valor;
    this.podeEntrar = this.usuarios.includes(this.permissao);
    this.mensagem = '';
  }

  entrar(): void {
    if (this.usuarios.includes(this.permissao)) {
      this.mensagem = `Bem vindo usuário ${this.permissao}, você está logado.`;
    }
  }
}
