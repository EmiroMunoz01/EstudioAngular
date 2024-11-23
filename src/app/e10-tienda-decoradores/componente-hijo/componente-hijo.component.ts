import {
  Component,

} from '@angular/core';
import { Producto } from '../producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css',
})
export class ComponenteHijoComponent {
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService) {}

  agregarProducto(evento: Event) {
    evento.preventDefault();
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      console.log('Existen errores en el ingreso de los datos');
      return;
    }
    
    const producto = new Producto(this.descripcionInput, this.precioInput);

    //agregar producto mediante el servicio
    this.productoService.agregarProducto(producto);

    //se limpio el codigo
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
