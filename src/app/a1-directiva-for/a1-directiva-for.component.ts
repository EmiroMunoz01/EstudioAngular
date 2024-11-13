import { Component } from '@angular/core';

@Component({
  selector: 'app-a1-directiva-for',
  standalone: true,
  imports: [],
  templateUrl: './a1-directiva-for.component.html',
  styleUrl: './a1-directiva-for.component.css',
})
export class A1DirectivaForComponent {
  tareas: string[] = ['Comprar auto', 'Comprar mackbook'];

  agregarTarea(nuevaTarea: string): void {
    if (nuevaTarea) {
      this.tareas.push(nuevaTarea);
    }
  }
}
