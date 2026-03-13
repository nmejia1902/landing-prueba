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

  activeIndex: number | null = null;

  services = [

    {
      title: 'Instalación de Redes Estructuradas',
      desc: 'Diseño e instalación de redes cableadas y WiFi para empresas, garantizando conectividad estable y segura.',
      img: 'assets/redes.jpg'
    },

    {
      title: 'Consultoria  en Tecnología Informática',
      desc: 'Asesoramos a empresas para mejorar el uso de la tecnología, optimizando procesos y ayudando a tomar decisiones estratégicas en sistemas.',
      img: 'assets/consultoria.jpg'
    },

    {
      title: 'Mantenimiento y Soporte Tecnico',
      desc: 'Diagnóstico y reparación de fallas en equipos informáticos, brindando soporte técnico especializado.',
      img: 'assets/Mantenimiento correctivo.jpg'
    },

    {
      title: 'Instalación de Videovigilancia',
      desc: 'Instalación de cámaras de seguridad y sistemas de monitoreo para proteger instalaciones empresariales.',
      img: 'assets/camaras.jpg'
    },

    {
      title: 'Seguridad Tecnológica',
      desc: 'Implementación de soluciones de seguridad informática para proteger datos, redes y sistemas empresariales.',
      img: 'assets/seguridad.jpg'
    },

    {
      title: 'Gestion software',
      desc: 'Atención técnica adaptada a las necesidades específicas de cada cliente y su infraestructura tecnológica.',
      img: 'assets/gestionSoftware.jpg'
    }

  ];

  toggleCard(index: number) {

    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }

  }

}