import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input() visible = false;
  @Input() titulo = 'Mensaje';
  @Input() mensaje = '';
  @Input() tipo: 'info' | 'error' | 'exito' = 'info';

  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}