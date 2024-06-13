import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-announcement',
  template: `
    <section class="announcement">
      <h2>We will return for 2025!</h2>
      <p>We'll be back bigger and better. Have a Question or Comment? We'd love to hear from you.</p>
      <button class="contact-button" (click)="navigateToContact()">Contact Us</button>
    </section>
  `,
  styles: `
    .announcement {
      background-color: #000;
      color: #fff;
      text-align: center;
      padding: 50px 20px;
    }

    .announcement h2 {
      margin-bottom: 20px;
    }

    .announcement p {
      margin-bottom: 30px;
    }

    .contact-button {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1.2em;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .contact-button:hover {
      background-color: #c0392b;
    }

  `
})
export class AnnouncementComponent {

  constructor(private readonly router: Router) {

  }

  navigateToContact() {
    this.router.navigate(['/contact-us']);
  }
}
