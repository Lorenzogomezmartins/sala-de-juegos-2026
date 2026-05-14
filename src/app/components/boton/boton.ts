import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boton',
  imports: [RouterLink],
  templateUrl: './boton.html',
  styleUrl: './boton.css',
})
export class Boton {
  @Input() texto = 'Botón';
  @Input() ruta = '';
  @Input() tipo: 'primario' | 'secundario' | 'peligro' = 'primario';
}