import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  template: `
    <header>
      <nav>
        <a [routerLink]="'/'">
          <img src="assets/adventurecon-logo.png" alt="AdventureCon Logo" class="logo">
        </a>
      @if (isMobile) {
        <button class="nav-button" (click)="toggleMenu()">
          <fa-icon [icon]="faBars"></fa-icon>
        </button>
        @if (showMenu()) {
          <div class="menu">
            <ul>
              <li><a [routerLink]="['/']">Home</a></li>
              <li><a [routerLink]="['/meeple-academy']">About</a></li>
              <li><a href="#">Events</a></li>
              <li><a [routerLink]="['/contact-us']">Contact</a></li>
            </ul>
          </div>
        }
      } @else {
          <ul>
            <li><a [routerLink]="['/']">Home</a></li>
            <li><a [routerLink]="['/meeple-academy']">About</a></li>
            <li><a href="#">Events</a></li>
            <li><a [routerLink]="['/contact-us']">Contact</a></li>
          </ul>
      }
      </nav>
    </header>
  `,
  styles: `
    header {
      background: white;
      padding: 10px 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .nav-button {
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    .logo {
      height: 50px;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }

    nav ul li {
      display: inline;
    }

    nav ul li a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }
  `
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = true;
  faBars = faBars;
  showMenu: WritableSignal<boolean> = signal(false);

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 768px)');
  }

  toggleMenu() {
    this.showMenu.set(!this.showMenu());
  }
}
