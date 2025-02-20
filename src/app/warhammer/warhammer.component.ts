import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCogs, faClock, faTrophy, faUser, faTag } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-warhammer',
  standalone: true,
  template: `
    <app-page-header pageName="Warhammer"></app-page-header>
    <div class="card-container">
      <div class="card">
        <div class="body">
          <img src="assets/40k.png" class="logo"  alt="Warhammer 40K Logo" />
          <h2>HawgHammer 40K GT</h2>
          <ul>
            <li><fa-icon [icon]="cogs"></fa-icon>2000 point armies</li>
            <li><fa-icon [icon]="clock"></fa-icon>Five 2.5-hour rounds</li>
            <li><fa-icon [icon]="trophy"></fa-icon>ITC &amp; Lord Marshal's Conference points</li>
            <li><fa-icon [icon]="user"></fa-icon>Limited to 64 badges</li>
            <li><fa-icon [icon]="tag"></fa-icon>Price: $85</li>
          </ul>
        </div>
        <div class="action">
          <a class="card-btn blue"
             target="_blank"
             href="https://tabletop.events/conventions/adventurecon-2025/badgetypes/warhammer-40k-weekend-badge1">Register Now</a>
        </div>
      </div>
      <div class="card">
        <div class="body">
          <img src="assets/sigmar.png" class="logo"  alt="Warhammer 40K Logo" />
          <h2>HawgHammer Age of Sigmar GT</h2>
          <ul>
            <li><fa-icon [icon]="cogs"></fa-icon>2000 point armies</li>
            <li><fa-icon [icon]="clock"></fa-icon>Five 3-hour rounds</li>
            <li><fa-icon [icon]="trophy"></fa-icon>ITC &amp; Season opener for Great Plains Masters</li>
            <li><fa-icon [icon]="user"></fa-icon>Limited to 64 badges</li>
            <li><fa-icon [icon]="tag"></fa-icon>Price: $85</li>
          </ul>
        </div>
        <div class="action">
          <a class="card-btn blue"
             target="_blank"
             href="https://tabletop.events/conventions/adventurecon-2025/badgetypes/age-of-sigmar-weekend-badge">Register Now</a>
        </div>
      </div>
    </div>
    <div class="common-details">
      <ul>
        <li>Player packet will be linked in the BCP event for badge holders.</li>
        <li>Prizes for top players overall, in super factions, best painted, army display, and surprise prizes!</li>
        <li>Access to full three days of the convention: play-to-win games, game library, events, and exhibitors' hall.</li>
        <li>Access exclusive AdventureCon merch store.</li>
      </ul>
    </div>
  `,
  imports: [
    PageHeaderComponent,
    FaIconComponent,
  ],
  styles: `
    .action {
      display: flex;
      justify-content: center;
    }

    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 2rem;
      justify-content: center;
    }

    .card {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 20px;
      width: 300px;
      display: flex;
      flex-direction: column;

      .body {
        flex: 1;
      }

      h2 {
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 15px;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 10px 0;
          display: flex;
          align-items: center;
          font-size: 0.95em;

          fa-icon {
            margin-right: 10px;
            color: rgb(39, 120, 196);
          }
        }
      }

      img.logo {
        display: block;
        margin: 0 auto 15px;
      }
    }

    .common-details {
      max-width: 800px;
      margin: 30px auto;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);

      ul {
        list-style: disc;
        padding-left: 20px;
      }
    }

    @media(max-width: 768px) {
      .card-container {
        flex-direction: column;
        align-items: center;
      }
    }
  `
})
export class WarhammerComponent {
  cogs = faCogs;
  clock = faClock;
  trophy = faTrophy;
  user = faUser;
  tag = faTag;
}
