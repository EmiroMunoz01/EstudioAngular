import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  standalone: true,
  imports: [],
  template: `
    <h1>{{ tituloComponenteInline }}</h1>
    <p>Fuente mas grande</p>
  `,
  styles: `
 h1{
  color : blue;
  }
  p{font-size: 20px}
  `,
})
export class ComponenteInlineComponent {
  tituloComponenteInline = 'Componente Inline!';
}
