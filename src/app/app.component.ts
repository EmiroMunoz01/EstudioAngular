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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Emiro1Component, ComponenteInlineComponent, InterpolacionComponent, PadreComponent, HijoComponent, EventBindingComponent, ReplicadorComponent, Replicador2Component, SaludarComponenteComponent, CalculadoraComponent, IfElseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directiva If Else';
}

