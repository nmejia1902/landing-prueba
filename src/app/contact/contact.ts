import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

  whatsapp() {
    window.open(
      'https://wa.me/50499999999',
      '_blank'
    );
  }
}