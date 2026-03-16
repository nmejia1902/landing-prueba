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
      desc: 'Diseño e instalación de redes cableadas y WiFi para empresas, garantizando conectividad estable y segura bajo estándares internacionales.',
      img: 'assets/redes.jpg'
    },
    {
      title: 'Consultoría en Tecnología IT',
      desc: 'Asesoramos a empresas para optimizar procesos y tomar decisiones estratégicas en infraestructura de sistemas y transformación digital.',
      img: 'assets/consultoria.jpg'
    },
    {
      title: 'Mantenimiento y Soporte Técnico',
      desc: 'Diagnóstico y reparación preventiva y correctiva de equipos informáticos, asegurando la continuidad operativa de su negocio.',
      img: 'assets/Mantenimiento correctivo.jpg'
    },
    {
      title: 'Sistemas de Videovigilancia',
      desc: 'Instalación avanzada de cámaras de seguridad y sistemas de monitoreo remoto para la protección total de sus instalaciones.',
      img: 'assets/camaras.jpg'
    },
    {
      title: 'Seguridad Tecnológica',
      desc: 'Implementación de firewalls y soluciones de ciberseguridad para proteger la integridad de sus datos y redes empresariales.',
      img: 'assets/seguridad.jpg'
    },
    {
      title: 'Gestión de Software',
      desc: 'Atención técnica personalizada y administración de licencias adaptada a las necesidades específicas de su infraestructura.',
      img: 'assets/gestionSoftware.jpg'
    }
  ];

  toggleCard(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  // Nueva función que maneja el evento y la redirección
  onContactClick(event: MouseEvent, serviceTitle: string) {
    event.stopPropagation(); // Evita que el clic llegue a la tarjeta y la cierre
    
    const phone = "50496817350";
    const message = `Hola Cyber Space Solutions, me interesa el servicio de: ${serviceTitle}. ¿Podrían brindarme más información?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  }
}