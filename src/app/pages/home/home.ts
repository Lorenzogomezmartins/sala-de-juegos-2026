import { Component } from '@angular/core';
import { Boton } from '../../components/boton/boton';

@Component({
  selector: 'app-home',
  imports: [Boton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}