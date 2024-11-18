import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-e7-calculadora-input',
  standalone: true,
  imports: [FormsModule, ResultadoComponent],
  templateUrl: './e7-calculadora-input.component.html',
  styleUrl: './e7-calculadora-input.component.css',
})
export class E7CalculadoraInputComponent {

  variableA: number = 0;
  variableB: number = 0;
  resultadoPadre: number = 0;


  sumar() {
    this.resultadoPadre = this.variableA + this.variableB;
  }


}
