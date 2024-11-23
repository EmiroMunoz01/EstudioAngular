import { Injectable } from '@angular/core';
import { Producto } from './a2-tienda/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productos: Producto[] = [
    new Producto('Pantalon', 130),
    new Producto('Camisa', 50),
  ];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
