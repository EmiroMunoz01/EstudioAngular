import { ProductoService } from './../producto.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { Producto } from './producto.model';

@Component({
  selector: 'app-e10-tienda-decoradores',
  standalone: true,
  imports: [FormsModule, ComponenteHijoComponent],
  templateUrl: './e10-tienda-decoradores.component.html',
  styleUrl: './e10-tienda-decoradores.component.css',
})
export class E10TiendaDecoradoresComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    //inicializar los productos
    this.productos = this.productoService.productos;
  }
}
