import {Component} from "@angular/core";

@Component({
  standalone: true,
  imports: [],
  selector: 'app-pricing',
  template: `
    <h1>Pricing</h1>

    <h2>Adult Badges</h2>

    <div class="cards">
      <div class="price-card">
        <div class="price-header vig">
          <h3>VIG Attendee Badge</h3>
          <span>3 Day Admission</span>
        </div>
        <div class="price-amount">
          <span class="price vig">$85</span>
          <span class="caption">Only 75 total!</span>
        </div>
        <div class="price-perks">
          <ul class="perk-list">
            <li>Special VIG swag bag (enamel pin, board games, surprise freebies)</li>
            <li>Access to over 500 games</li>
            <li>Over 75 Play-to-Win Games</li>
            <li>Tournaments (Crokinole, Kabuto Sumo, Trivia, and more!)</li>
            <li>Early Event Selection</li>
            <li>Vendor Hall access</li>
            <li>AdventureCon merch store</li>
          </ul>
        </div>
      </div>

        <div class="price-card">
          <div class="price-header">
            <h3>Weekend Badge</h3>
            <span>3 Day Admission</span>
          </div>
          <div class="price-amount">
            <span class="price">$50</span>
            <span class="caption">Early bird pricing until March 8.</span>
          </div>
          <div class="price-perks">
            <ul class="perk-list">
              <li>Access to over 500 games</li>
              <li>Over 75 Play-to-Win Games</li>
              <li>Tournaments (Crokinole, Kabuto Sumo, Trivia, and more!)</li>
              <li>Vendor Hall access</li>
              <li>AdventureCon merch store</li>
            </ul>
          </div>
        </div>

        <div class="price-card">
          <div class="price-header">
            <h3>Friday / Saturday Badge</h3>
            <span>1 Day Admission</span>
          </div>
          <div class="price-amount">
            <span class="price">$25</span>
            <span>&nbsp;</span>
          </div>
          <div class="price-perks">
            <ul class="perk-list">
              <li>Access to over 500 games</li>
              <li>Over 75 Play-to-Win Games</li>
              <li>Tournaments (Crokinole, Kabuto Sumo, Trivia, and more!)</li>
              <li>Vendor Hall access</li>
              <li>AdventureCon merch store</li>
            </ul>
          </div>
        </div>

        <div class="price-card">
          <div class="price-header">
            <h3>Sunday Badge</h3>
            <span>1 Day Admission</span>
          </div>
          <div class="price-amount">
            <span class="price">$20</span>
            <span>&nbsp;</span>
          </div>
          <div class="price-perks">
            <ul class="perk-list">
              <li>Access to over 500 games</li>
              <li>Over 75 Play-to-Win Games</li>
              <li>Tournaments (Crokinole, Kabuto Sumo, Trivia, and more!)</li>
              <li>Vendor Hall access</li>
              <li>AdventureCon merch store</li>
            </ul>
          </div>
        </div>
    </div>

    <h2>Kids Badges</h2>
    <div class="kids cards">
      <div class="price-card">
        <div class="price-header">
          <h3>Kids Weekend Badge</h3>
          <span>3 Day Admission</span>
        </div>
        <div class="price-amount">
          <span class="price">$30</span>
          <span class="caption">Ages 13 and Under</span>
        </div>
        <div class="price-perks">
          <ul class="perk-list">
            <li>Special VIG swag bag (enamel pin, board games, surprise freebies)</li>
            <li>Access to over 500 games</li>
            <li>Over 75 Play-to-Win Games</li>
            <li>Tournaments (Crokinole, Kabuto Sumo, Trivia, and more!)</li>
            <li>Vendor Hall access</li>
            <li>AdventureCon merch store</li>
          </ul>
        </div>
      </div>
      <div class="price-card">
        <div class="price-header">
          <h3>Kids Single Day Badge</h3>
          <span>1 Day Admission</span>
        </div>
        <div class="price-amount">
          <span class="price">$10</span>
          <span class="caption">Ages 13 and Under</span>
        </div>
        <div class="price-perks">
          <ul class="perk-list">
            <li>Special VIG swag bag (enamel pin, board games, surprise freebies)</li>
            <li>Access to over 500 games</li>
            <li>Over 75 Play-to-Win Games</li>
            <li>Tournaments (Crokinole, Kabuto Sumo, Trivia, and more!)</li>
            <li>Vendor Hall access</li>
            <li>AdventureCon merch store</li>
          </ul>
        </div>
      </div>
    </div>

    <h2>Warhammer Tournament Badges - <a href="https://www.games-explosion.com/" target="_blank">Sponsored by Games Explosion</a></h2>

    <div class="warhammer cards">
      <div class="price-card">
        <div class="price-header">
          <h3>Warhammer 40k Attendee Badge</h3>
          <span>3 Day Admission</span>
        </div>
        <div class="price-amount">
          <span class="price">$85</span>
          <span><img src="assets/40k.png" class="logo"  alt="Warhammer 40K Logo" /></span>
        </div>
        <div class="price-perks">
          <ul class="perk-list">
            <li>Same as adult weekend badge</li>
            <li>Warhammer 40K Tournament access</li>
            <li>Warhammer door prizes and giveaways</li>
            <li>2000 Point Armies</li>
            <li>ITC &amp; Lord Marshal's Conference points</li>
          </ul>
        </div>
      </div>

      <div class="price-card">
        <div class="price-header">
          <h3>Warhammer Age of Sigmar Attendee Badge</h3>
          <span>3 Day Admission</span>
        </div>
        <div class="price-amount">
          <span class="price">$85</span>
          <span><img src="assets/sigmar.png" class="logo"  alt="Warhammer 40K Logo" /></span>
        </div>
        <div class="price-perks">
          <ul class="perk-list">
            <li>Same as adult weekend badge</li>
            <li>Warhammer 40K Tournament access</li>
            <li>Warhammer door prizes and giveaways</li>
            <li>2000 Point Armies</li>
            <li>ITC &amp; Season opener for Great Plains Masters</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      width: 80%;
      margin: 0 auto;
      padding-top: 2rem;
    }

    h2 {
      margin: 2rem 0;
    }

    .cards {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &.warhammer,
      &.kids{
        justify-content: space-evenly;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
      }
    }

    .price-card {
      background-color: #fff;
      margin-top: 0;
      box-shadow: 0 0 12px rgba(0, 0, 0, .1);
      border: 1px solid #bebebe;
      width: 269px;

      .price-header {
        text-align: center;
        background-color: #bebebe;
        color: #fff;

        &.vig {
          background-color: #502215;
          color: #ebab3f;
        }

        h3 {
          font-size: 1.5rem;
          padding: 10px 0 5px;
          word-wrap: break-word;
        }
      }

      .perk-list {
        padding: 24px 24px 30px;

        li {
          padding: 16px 0;
        }
      }

      .price-amount {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        border-bottom: 1px solid #bebebe;

        .caption {
          font-size: 12px;
        }
      }

      .price {
         font-size: 80px;
         font-weight: 300;
         line-height: 1.03;

        &.vig {
          color: #ebab3f;
        }
      }
    }
  `
})
export class PricingPageComponent {

}
