import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-saludar-componente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saludar-componente.component.html',
  styleUrl: './saludar-componente.component.css',
})
export class SaludarComponenteComponent {
  saludo: string = 'saludo aaa';
}
