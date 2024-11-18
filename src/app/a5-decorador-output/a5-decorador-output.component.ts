import { Component } from '@angular/core';
import { HijoComponent } from '../a5-decorador-output/hijo/hijo.component';

@Component({
  selector: 'app-a5-decorador-output',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './a5-decorador-output.component.html',
  styleUrl: './a5-decorador-output.component.css',
})
export class A5DecoradorOutputComponent {
  mensaje: string = '';

  //se emitio una cadena string, es lo que vamos a recibir del componente hijo

  recibirNotificacion(mensajeHijo: string) {
    this.mensaje = mensajeHijo;
  }
}
