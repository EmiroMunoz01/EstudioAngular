import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Emiro1Component } from "./emiro-1/emiro-1.component";
import { ComponenteInlineComponent } from "./componente-inline/componente-inline.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from "./hijo/hijo.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { Replicador2Component } from "./replicador-2/replicador-2.component";
import { SaludarComponenteComponent } from "./saludar-componente/saludar-componente.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { IfElseComponent } from "./if-else/if-else.component";
import { LocalReferenciaComponent } from "./local-referencia/local-referencia.component";
import { A1DirectivaForComponent } from "./a1-directiva-for/a1-directiva-for.component";
import { A2TiendaComponent } from "./a2-tienda/a2-tienda.component";
import { A3ListadoProductosComponent } from "./a3-listado-productos/a3-listado-productos.component";
import { A2TiendaEComponent } from "./a2-tienda-e/a2-tienda-e.component";
import { A4DecoradorInputComponent } from "./a4-decorador-input/a4-decorador-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Emiro1Component, ComponenteInlineComponent, InterpolacionComponent, PadreComponent, HijoComponent, EventBindingComponent, ReplicadorComponent, Replicador2Component, SaludarComponenteComponent, CalculadoraComponent, IfElseComponent, LocalReferenciaComponent, A1DirectivaForComponent, A2TiendaComponent, A3ListadoProductosComponent, A2TiendaEComponent, A4DecoradorInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 18';
}

