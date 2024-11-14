import { Component } from '@angular/core';
import { Producto } from './producto.model';

@Component({
  selector: 'app-a2-tienda',
  standalone: true,
  imports: [],
  templateUrl: './a2-tienda.component.html',
  styleUrl: './a2-tienda.component.css',
})
export class A2TiendaComponent {

  productos: Producto[] = [
    new Producto('Pantalon', 130),
    new Producto('Camisa', 50),
  ];
  
}
