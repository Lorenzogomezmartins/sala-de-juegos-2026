import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { QuienSoy } from './pages/quien-soy/quien-soy';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Sala de Juegos',
  },
  {
    path: 'login',
    component: Login,
    title: 'Iniciar sesión',
  },
  {
    path: 'registro',
    component: Registro,
    title: 'Registro',
  },
  {
    path: 'quien-soy',
    component: QuienSoy,
    title: 'Quién soy',
  },
  {
    path: '**',
    redirectTo: '',
  },
];