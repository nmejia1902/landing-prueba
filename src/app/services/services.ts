import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {

  services = [
    {
      title: 'Instalaciones de Red',
      desc: 'Instalación y configuración profesional de redes cableadas y WiFi para tu empresa.',
      icon: '📶'
    },
    {
      title: 'Soporte a Equipos',
      desc: 'Soporte técnico especializado para equipos informáticos.',
      icon: '🖥️'
    },
    {
      title: 'Mantenimientos Preventivos',
      desc: 'Mantenimientos programados para prevenir fallas y extender la vida útil.',
      icon: '🔧'
    },
    {
      title: 'Sistemas de Seguridad',
      desc: 'Instalación de sistemas de seguridad y vigilancia moderna.',
      icon: '🛡️'
    }
  ];

  gallery = [
    {
      img: 'https://microsegur.com/wp-content/uploads/2022/10/cableado-1024x683.jpg',
      title: 'Redes Profesionales'
    },
    {
      img: 'https://www.senati.edu.pe/sites/default/files/2017/carrera/11/carrera-dual-soporte-y-mantenimiento-de-equipos-de-computacion-senati1800-x-1190.jpg',
      title: 'Soporte Especializado'
    },
    {
      img: 'https://www.ubicaware.com/assets/img/mdvr.jpg',
      title: 'Seguridad Avanzada'
    }
  ];
}