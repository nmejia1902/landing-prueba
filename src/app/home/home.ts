import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Ahora usamos un objeto completo para cada slide
  slides = [
    {
      img: 'assets/slide1.jpg',
      badge: 'Infraestructura Confiable',
      titleFirst: 'Soluciones Tecnológicas',
      titleSecond: 'Integrales',
      desc: 'Infraestructura, soporte y seguridad avanzada para la empresa moderna en Honduras.'
    },
    {
      img: 'assets/slide2.jpg',
      badge: 'Conectividad Total',
      titleFirst: 'Redes y WiFi',
      titleSecond: 'de Clase Mundial',
      desc: 'Diseñamos e instalamos redes certificadas para garantizar la operatividad de su negocio.'
    },
    {
      img: 'assets/slide3.jpg',
      badge: 'Protección Total',
      titleFirst: 'Seguridad y',
      titleSecond: 'Videovigilancia',
      desc: 'Protegemos sus activos digitales y físicos con tecnología de monitoreo inteligente.'
    }
  ];

  // Mantener la compatibilidad con los 'dots' que usan images.length
  images = this.slides.map(slide => slide.img);

  current = 0;
  intervalId: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    // Un tiempo un poco más largo para que la animación de zoom luzca
    this.intervalId = setInterval(() => {
      this.next();
    }, 6000); 
  }

  stopTimer() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  next() {
    this.current = (this.current + 1) % this.slides.length;
  }

  prev() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.current = index;
    // Reiniciamos el timer para que no cambie justo después del clic
    this.stopTimer();
    this.startTimer();
  }

  scrollTo(section: string) {
    document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}