import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EmailService} from "../email.service";

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-announcement',
  template: `
    <section class="announcement">
      <h2>Ready for AdventureCon 2025?</h2>

      <div class="content-row">
        <div class="content-block hours">
          <div class="operation">
            <h3>Hours of Operation</h3>
            <p>Friday 9am - 2am</p>
            <p>Saturday 9am - 2am</p>
            <p>Sunday 9am - 8pm</p>
          </div>

          <div class="location">
            <h3>Location</h3>
            <p>Embassy Suites - Northwest Arkansas</p>
            <p>3303 Pinnacle Hills Pkwy</p>
            <p>Rogers, AR 72758</p>
          </div>
        </div>

        <div class="content-block map">
          <iframe width="90%"
                  class="map"
                  height="450"
                  style="border: 0"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://google.com/maps/embed/v1/place?q=place_id:ChIJ779G7Q4RyYcRGb9u6FVwSKU&key=AIzaSyC8rD1MTlH-nC4YiYsOYb_DqoK5g5J96ms"></iframe>
        </div>

        <div class="content-block form">
          <h2>Want to be a sponsor or have a general inquiry? Drop us a message!</h2>
          <form [formGroup]="emailForm">
            <div class="form-group">
              <div class="name-fields">
                <input type="text" formControlName="name" id="name" placeholder="Name" />
                <input type="email" formControlName="email" id="email" placeholder="Email address" />
              </div>
            </div>
            <div class="form-group">
              <textarea id="message" formControlName="message" placeholder="Type your message"></textarea>
            </div>
            <button type="submit" (click)="sendEmail()">Send</button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: `
    .announcement {
      background-color: #000;
      color: #fff;
      text-align: center;
      padding: 50px 0;
    }

    .announcement h2 {
      margin-bottom: 20px;
    }

    .announcement > p {
      margin-bottom: 30px;
    }

    .content-row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 2%;
      flex-direction: column;

      @media (min-width: 1200px) {
        flex-direction: row;
      }

      .content-block {
        display: flex;
        flex: 1;
        flex-direction: column;

        &.hours {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;

          @media (min-width: 1200px) {
            max-width: 300px;
            display: flex;
            flex-direction: column;
          }
        }

        h3 {
          font-size: large;
          font-weight: bold;
        }

        p, h3 {
          margin: 0;
          padding: 0;
          text-align: left;
        }

        &.map {
          margin: 1rem 0;
          align-items: center;

          @media (min-width: 1200px) {
            margin: 0 1rem;
          }
        }

        .dates {
          display: flex;
          flex-direction: column;
          align-items: baseline;
        }
      }
    }

    .location {
      margin-top: 0;
      @media (min-width: 1200px) {
        margin-top: 16px;
      }
    }

    .form {
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
    }
  `
})
export class AnnouncementComponent implements OnInit {

  public emailForm!: FormGroup;

  constructor(private readonly emailService: EmailService) {

  }

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
