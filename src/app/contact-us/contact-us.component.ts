import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import { Router, RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  standalone: true,
  template: `
    <app-page-header pageName="Contact Us"></app-page-header>

    <section class="contact-form">
      <h2>Want to be a sponsor or have a general inquiry? Drop us a message!</h2>
      <form [formGroup]="emailForm">
        <div class="form-group">
          <label for="first-name">Name <span class="required">*</span></label>
          <div class="name-fields">
            <input type="text" formControlName="name" id="name" placeholder="Name" />
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email <span class="required">*</span></label>
          <input type="email" formControlName="email" id="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" formControlName="message" placeholder="Type your message"></textarea>
        </div>
        <button type="submit" (click)="sendEmail()">Send</button>
      </form>
    </section>
  `,
  styles: `
    .contact-form {
      background-color: #fff;
      padding: 50px 20px;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    .contact-form h2 {
      font-size: 1.5em;
      margin-bottom: 20px;
      text-align: center;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .required {
      color: red;
    }

    .name-fields {
      display: flex;
      gap: 10px;
    }

    .name-fields input {
      flex: 1;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .form-group textarea {
      height: 100px;
      resize: none;
    }

    button {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1.2em;
      cursor: pointer;
      border-radius: 5px;
      display: block;
      width: 100%;
      text-align: center;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #c0392b;
    }
  `,
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, RouterLink, PageHeaderComponent]
})
export class ContactUsComponent implements OnInit {

  public emailForm!: FormGroup;

  constructor(private readonly emailService: EmailService) {}

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    })
  }

  sendEmail() {
    this.emailService.sendEmail(this.emailForm.getRawValue()).subscribe({
      next: () => {
        this.emailForm.reset();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
