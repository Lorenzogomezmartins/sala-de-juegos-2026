import {
  Component,
  inject,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { GithubService } from '../../core/service/github.service';
import { GithubUser } from '../../core/models/github-user.model';

import { Spinner } from '../../components/spinner/spinner';

@Component({
  selector: 'app-quien-soy',
  imports: [CommonModule, Spinner],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css',
})
export class QuienSoy implements OnInit {
  private readonly githubService = inject(GithubService);
  private readonly cdr = inject(ChangeDetectorRef);

  usuario?: GithubUser;

  cargando = true;
  error = '';

  private readonly usernameGithub = 'Lorenzogomezmartins';

  ngOnInit(): void {
    this.obtenerDatosGithub();
  }

  private obtenerDatosGithub(): void {
    this.cargando = true;
    this.error = '';

    this.githubService.obtenerUsuario(this.usernameGithub).subscribe({
      next: (usuario) => {
        console.log('Datos GitHub:', usuario);

        this.usuario = usuario;
        this.cargando = false;

        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('Error GitHub:', error);

        this.error = 'No se pudieron cargar los datos desde GitHub.';
        this.cargando = false;

        this.cdr.detectChanges();
      },
    });
  }
}