import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css',
})
export class ComponenteHijoComponent {
  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto() {
    if (
      this.descripcionInput.nativeElement.value.trim() === '' ||
      this.precioInput == null ||
      this.precioInput.nativeElement.value <= 0
    ) {
      console.log('Existen errores en el ingreso de los datos');
      return;
    }
    //estamos creando el objeto pero desde objetos
    const producto = new Producto(
      this.descripcionInput.nativeElement.value,
      this.precioInput.nativeElement.value
    );

    //emitir evento del nuevo producto

    this.nuevoProducto.emit(producto);

    this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;
  }
}
