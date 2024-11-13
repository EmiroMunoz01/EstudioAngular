import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador-2',
  standalone: true,
  imports: [],
  templateUrl: './replicador-2.component.html',
  styleUrl: './replicador-2.component.css',
})
export class Replicador2Component {
  texto: string = '';

  capturarEvento(evento: Event) {
    const elementoCapturado = evento.target as HTMLInputElement;
    this.texto = elementoCapturado.value;
  }
}
