import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Modal],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';

  modalVisible = false;
  modalTitulo = '';
  modalMensaje = '';

  iniciarSesion(): void {
    this.modalTitulo = 'Sprint 1';
    this.modalMensaje =
      'El login visual.';
    this.modalVisible = true;
  }

  cerrarModal(): void {
    this.modalVisible = false;
  }
}