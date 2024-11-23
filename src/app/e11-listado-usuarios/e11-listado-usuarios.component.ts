import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-e11-listado-usuarios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './e11-listado-usuarios.component.html',
  styleUrl: './e11-listado-usuarios.component.css',
})
export class E11ListadoUsuariosComponent {
  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.obtenerDatos().subscribe((datos) => {
      this.usuarios = datos;
    });
  }
}
