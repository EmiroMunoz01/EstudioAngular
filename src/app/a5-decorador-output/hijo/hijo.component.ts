import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje() {
    //emitir el evento con un mensaje cadena

    this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  }
}
