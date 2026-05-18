import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, Modal],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  nombre = '';
  apellido = '';
  edad: number | null = null;
  email = '';
  password = '';

  modalVisible = false;
  modalTitulo = '';
  modalMensaje = '';

  registrarse(): void {
    this.modalTitulo = 'Sprint 1';
    this.modalMensaje =
      'El registro visual ya está creado.';
    this.modalVisible = true;
  }

  cerrarModal(): void {
    this.modalVisible = false;
  }
}