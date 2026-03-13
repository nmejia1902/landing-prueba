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

  images = [
    'assets/slide1.jpg',
    'assets/slide2.jpg',
    'assets/slide3.jpg'
  ];

  current = 0;
  intervalId: any;

  ngOnInit() {

    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);

  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  next() {
    this.current = (this.current + 1) % this.images.length;
  }

  prev() {
    this.current =
      (this.current - 1 + this.images.length) %
      this.images.length;
  }

  goToSlide(index: number) {
    this.current = index;
  }

}