import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Emiro1Component } from "./emiro-1/emiro-1.component";
import { ComponenteInlineComponent } from "./componente-inline/componente-inline.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Emiro1Component, ComponenteInlineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola mundo desde Angular';
}
