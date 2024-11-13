import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css',
})
export class InterpolacionComponent {
  titulo = 'Universidad Angular';
  usuario = {
    nombre: 'Emiro',
    edad: 23,
  };

  saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }
}