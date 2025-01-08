import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  standalone: true,
  selector: 'app-hotel',
  template: `
    <app-page-header pageName="Hotel Information"></app-page-header>
    <section class="lead-image">
      <div class="lead-content">
          <h2>Hotel Venue for the Convention</h2>
          <div>Check out our great deal and discount for attending the convention. There's nothing better than walking up to your room at 2am and walking back down at 8am!</div>
      </div>
    </section>

    <section class="hotels">
      <div class="promo">
        <img width="200" height="98" src="assets/embassy-logo.png" />
        <div class="info">
          <h3>Embassy Suites Northwest AR Hotel, Spa & Convention Ctr</h3>
          <p>July 11th - 13th 2025</p>
          <p>$169 for 2 Room Suite - 1 King Bed</p>
          <p>$179 for 2 Room Suite - 2 Double Beds</p>
          <p class="address">3303 S Pinnacle Hills Pkwy, Rogers, AR 72758</p>

          <a href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=XNAESES&arrivalDate=2025-07-10&departureDate=2025-07-13&groupCode=93B&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink">Click here to reserve your spot at the venue!</a>
        </div>
      </div>

    </section>
  `,
  imports: [
    PageHeaderComponent
  ],
  styles: `
    .info {
      h3 {
        font-size: 1.25rem;
        font-weight: bold;
      }

      p:not(.address) {
        text-align: center;
        font-weight: bold;
      }

      p.address, a {
        display: block;
        text-align: center;
      }
    }

    .hotels {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 32px;
    }

    .promo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .lead-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      max-width: 75%;
      margin: auto;

      h2 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: .5rem;
        line-height: 1.2;
      }
    }

    .lead-image {
      padding: 50px 0;
      background-position: 50%;
      background-size: cover;
      background-image: linear-gradient(180deg,rgba(210,205,194,0.33) 0%,rgba(12,113,195,0.44) 100%),url('/assets/embassy.jpg');
    }
  `
})
export class HotelInformationComponent {

}
