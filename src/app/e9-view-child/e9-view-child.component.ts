import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from '../e9-view-child/hijo/hijo.component';

@Component({
  selector: 'app-e9-view-child',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './e9-view-child.component.html',
  styleUrl: './e9-view-child.component.css',
})
export class E9ViewChildComponent {
  @ViewChild(HijoComponent) componenteHijo!: HijoComponent;

  cambiarMensajeHijo() {
    this.componenteHijo.cambiarMensaje('Mensaje actualizado desde el componente padre');
  }
}
