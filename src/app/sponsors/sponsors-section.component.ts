import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  template: `
    <section class="sponsors-section">
      <h2>Our Sponsors</h2>
      <div class="sponsors-carousel">
        <owl-carousel-o [options]="customOptions">
          @for(sponsor of sponsors; track sponsor) {
            <ng-template carouselSlide>
              <div class="logo-container">
                <a [href]="sponsor.url" target="_blank">
                  <img [src]="sponsor.logo" [alt]="sponsor.name" class="sponsor-logo">
                </a>
              </div>
            </ng-template>
          }
        </owl-carousel-o>
      </div>
    </section>
  `,
  imports: [
    CarouselModule
  ],
  styles: `
    .sponsors-section {
      background-color: #000;
      color: #fff;
      text-align: center;
      padding: 50px 20px 12px;
    }

    .sponsors-section h2 {
      margin-bottom: 20px;
    }

    .sponsors-carousel {
      max-width: 800px;
      margin: 0 auto;
    }

    .logo-container {
      margin-right: 10px;
    }

    .sponsor-logo {
      width: 100px;
      height: auto;
      margin: 0 auto;
    }
  `
})
export class SponsorsSectionComponent {
  sponsors = [
    { name: 'Bolder Coffee', logo: 'assets/sponsors/bolder-coffee.png', url: 'https://drinkbolder.com/' },
    { name: 'Visit Bentonville', logo: 'assets/sponsors/visit-bentonville.png', url: 'https://www.visitbentonville.com/' },
    { name: 'All Play', logo: 'assets/sponsors/allplay.png', url: 'https://www.allplay.com/board-games/' },
    { name: 'Font Awesome', logo: 'assets/sponsors/font-awesome.png', url: 'https://fontawesome.com/' },
    { name: 'Advance Pest Control', logo: 'assets/sponsors/advance.png', url: 'https://www.advancepestcontrolnwa.com/' },
    { name: 'CrowD Games', logo: 'assets/sponsors/crowD.png', url: 'https://crowdgames.us/' },
    { name: 'Dice & Dine', logo: 'assets/sponsors/Dice&Dine.png', url: 'https://bransonboardgamecafe.com/' },
    { name: 'Envoy', logo: 'assets/sponsors/envoy.png', url: 'https://www.dexposure.com/envoy/' },
    { name: 'Modern Storage', logo: 'assets/sponsors/modern-storage.png', url: 'https://www.modernstorage.com/' },
    { name: 'Botanical', logo: 'assets/sponsors/botanical-bentonville.png', url: 'https://www.botanicalnwa.com/' },
    { name: 'JWei Graphic Design', logo: 'assets/sponsors/jwei.png', url: 'https://www.jessicawei.com' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  }

}

