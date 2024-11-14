import { Component } from '@angular/core';
import { HijoComponent } from '../a4-decorador-input/hijo/hijo.component';

@Component({
  selector: 'app-a4-decorador-input',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './a4-decorador-input.component.html',
  styleUrl: './a4-decorador-input.component.css',
})
export class A4DecoradorInputComponent {
  mensajePadre: string='Mensaje desde el componente padre';
}
