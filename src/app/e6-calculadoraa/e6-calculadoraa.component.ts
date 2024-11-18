import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-e6-calculadoraa',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './e6-calculadoraa.component.html',
  styleUrl: './e6-calculadoraa.component.css',
})
export class E6CalculadoraaComponent {
  resultadoPadre: number = 0;

  recibirResultado(resultadoHijo: number) {
    this.resultadoPadre = resultadoHijo;
  }
}
