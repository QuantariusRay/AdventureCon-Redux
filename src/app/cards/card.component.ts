import { Component, input, InputSignal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  selector: 'app-card',
  template: `
    <div class="card">
      @if (icon()) {
        <div class="card-icon">
          <fa-icon size="4x" [icon]="icon()"></fa-icon>
        </div>
      } @else {
        <div>
          <img src="assets/meeple-academy-logo.png">
        </div>
      }
      <h3>{{ cardTitle() }}</h3>
      <ng-content></ng-content>
    </div>

  `,
  styles: `
    .card {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 300px;
      text-align: center;
      margin-bottom: 20px;
      min-height: 20rem;
    }

    .card h3 {
      margin-bottom: 4px;
      font-size: 1.5em;
      color: #333;
    }

    .card-icon {
      margin-bottom: 20px;
    }

    @media (min-width: 768px) {
      :host {
        min-height: 21rem;

        .card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
      }
    }
  `,
  imports: [
    FaIconComponent,
    FaIconComponent
  ]
})
export class CardComponent {
  cardTitle: InputSignal<string> = input.required();
  icon: any = input();
}
