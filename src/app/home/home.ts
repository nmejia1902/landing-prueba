import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  images = [
    'https://img.freepik.com/foto-gratis/dos-empleados-oficina-sonrientes-trabajando-computadora-portatil_171337-5836.jpg?semt=ais_user_personalization&w=740&q=80',
    'https://img.freepik.com/foto-gratis/oficina-vacia-fabrica-investigacion-desarrollo-fotovoltaica_482257-126742.jpg?semt=ais_rp_progressive&w=740&q=80',
    'https://forcomin.com/wp-content/uploads/2024/01/3-1-1024x684-1.jpg'
  ];

  current = 0;

  next() {
    this.current = (this.current + 1) % this.images.length;
  }

  prev() {
    this.current =
      (this.current - 1 + this.images.length) %
      this.images.length;
  }
}