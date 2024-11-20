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
  //1 usanis el viewchild en vez del ngModel para acceder al valor del campo que hemos marcado con la referencia #descripcionInput y #precioInput
  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;

  //5 aqui estamos emitiendo el evento pasando como tipo de varible un tipo Producto
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto(evento: Event) {
    evento.preventDefault();
    if (
      //2 para hacer referencia a las variables lo hacemos por medio de elementos nativos para acceder a su propiedad y hacer la
      this.descripcionInput.nativeElement.value.trim() === '' ||
      this.precioInput == null ||
      this.precioInput.nativeElement.value <= 0
    ) {
      console.log('Existen errores en el ingreso de los datos');
      return;
    }
    //3 estamos creando el objeto pero al momento de querer acceder a su valor lo haremos como elementos nativos
    const producto = new Producto(
      this.descripcionInput.nativeElement.value,
      this.precioInput.nativeElement.value
    );

    //4 emitir el nuevo producto y notificar al padre, evento del nuevo producto, para posteriormente agregarlo en un evento emitido desde aqui. Para esto usamos el output, el tipo que emitimos es del tipo Producto, el mismo del constructor

    this.nuevoProducto.emit(producto);

    //6 finalmente vamos a limpiar los campos del formulario

    this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;
  }
}
