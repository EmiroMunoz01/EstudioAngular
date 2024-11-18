import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  variableA: number = 0;
  variableB: number = 0;

  resultado: number = 0;

  @Output() notificarPadre = new EventEmitter<number>();

  sumar() {
    this.resultado = this.variableA + this.variableB;
    this.notificarPadre.emit(this.resultado);
  }
}
