import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrimerServicioService {
  private mensaje: string = 'Hola desde el servicio xddddddddd';

  constructor() {}

  obtenerMensaje(): string {
    return this.mensaje;
  }
}
