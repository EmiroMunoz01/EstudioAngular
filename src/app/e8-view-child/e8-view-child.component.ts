import { Component, ElementRef, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-e8-view-child',
  standalone: true,
  imports: [],
  templateUrl: './e8-view-child.component.html',
  styleUrl: './e8-view-child.component.css',
})
export class E8ViewChildComponent {
  @ViewChild('referenciaInput') inputElemento!: ElementRef;

  cambiarTexto() {
    this.inputElemento.nativeElement.value = 'Texto Cambiado';
  }
}
