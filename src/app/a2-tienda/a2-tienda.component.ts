import { Component } from '@angular/core';
import { Producto } from './producto.model';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-a2-tienda',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './a2-tienda.component.html',
  styleUrl: './a2-tienda.component.css',
})
export class A2TiendaComponent {

  productos: Producto[] = [
    new Producto('Pantalon', 130),
    new Producto('Camisa', 50),
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto() {
    //validaremos que sean valores correctos
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      console.log('Debe ingresar una descripcion y un precio validos.');
      return;
    }
    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto);

    //limpiaremos los campos de entrada de datos
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
