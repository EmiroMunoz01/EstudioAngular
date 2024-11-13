import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css',
})
export class IfElseComponent {
  isAutenticado: boolean = false;

  alternarAutenticacion(): void {
    this.isAutenticado = !this.isAutenticado;
  }
}
