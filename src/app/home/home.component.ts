import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { CardComponent } from '../cards/card.component';
import { faAward, faDice, faDiceD20, faDragon, faHotel, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { SponsorsSectionComponent } from '../sponsors/sponsors-section.component';

export interface EmailForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AnnouncementComponent, CardComponent, RouterLink, SponsorsSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public emailForm!: FormGroup;
  public dice = faDice;
  public award = faAward;
  public hotel = faHotel;
  public d20 = faDiceD20;
  public trophy = faTrophy;
  public dragon = faDragon;

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
      next: (res) => {
        this.emailForm.reset();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
