import { Component } from '@angular/core';
import { Producto } from './producto.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-a2-tienda-e',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './a2-tienda-e.component.html',
  styleUrl: './a2-tienda-e.component.css',
})
export class A2TiendaEComponent {
  productos: Producto[] = [
    new Producto('iPhone 16', 160),
    new Producto('Samsung', 120),
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto() {
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      console.log('Existen errores en el ingreso de los datos');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto);
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
