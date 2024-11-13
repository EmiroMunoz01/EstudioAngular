import { Component } from '@angular/core';

@Component({
  selector: 'app-local-referencia',
  standalone: true,
  imports: [],
  templateUrl: './local-referencia.component.html',
  styleUrl: './local-referencia.component.css',
})
export class LocalReferenciaComponent {
  tarea: string = '';

  agregarTarea(nuevaTarea: string): void {
    this.tarea = nuevaTarea;
  }

}
