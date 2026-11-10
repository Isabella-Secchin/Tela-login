import { Component } from '@angular/core';
import { Acesso } from './acesso/acesso';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Acesso],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
