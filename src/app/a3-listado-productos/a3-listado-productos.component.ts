import { Component } from '@angular/core';
import { Producto } from '../a2-tienda/producto.model';

@Component({
  selector: 'app-a3-listado-productos',
  standalone: true,
  imports: [],
  templateUrl: './a3-listado-productos.component.html',
  styleUrl: './a3-listado-productos.component.css',
})
export class A3ListadoProductosComponent {

  productos: Producto[] = [
    new Producto('Pantalon', 130),
    new Producto('Camisa', 50),
  ];

  
}
