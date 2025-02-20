import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-tournament-games',
  standalone: true,
  template: `
      <h1>Board Game Tournaments</h1>

      <section
        class="tournament-section"
        style="background-image: url('assets/codenames.jpg');"
      >
        <div class="tournament-content">
          <h2>Codenames</h2>
          <p><strong>Day:</strong> Saturday</p>
          <p><strong>Time:</strong> 11am</p>
          <p><strong>Players per team:</strong> 2-3</p>
          <p><strong>Rounds:</strong> 2</p>
          <p><strong>Total Teams:</strong> 16</p>
          <a href="#" class="btn">Register Now</a>
        </div>
      </section>

      <section
        class="tournament-section"
        style="background-image: url('assets/crokinole.jpg');"
      >
        <div class="tournament-content">
          <h2>Crokinole</h2>
          <p><strong>Day:</strong> Saturday</p>
          <p><strong>Time:</strong> 2pm</p>
          <p><strong>Format:</strong> Single Elimination</p>
          <a href="#" class="btn">Register Now</a>
        </div>
      </section>

      <section
        class="tournament-section"
        style="background-image: url('assets/ticket-to-ride.png');"
      >
        <div class="tournament-content">
          <h2>Ticket to Ride</h2>
          <p><strong>Day:</strong> Sunday</p>
          <p><strong>Time:</strong> 1pm</p>
          <p><strong>Players per game:</strong> 4</p>
          <p><strong>Rounds:</strong> 2 (Final for top scorers)</p>
          <a href="#" class="btn">Register Now</a>
        </div>
      </section>

      <section
        class="tournament-section"
        style="background-image: url('assets/kabuto-sumo.png');"
      >
        <div class="tournament-content">
          <h2>Kabuto Sumo</h2>
          <p>Hosted by AllPlay</p>
          <p><strong>Day:</strong> Saturday</p>
          <p><strong>Time:</strong> 3pm</p>
          <p><strong>Format:</strong> Single Elimination</p>
          <a href="#" class="btn">Register Now</a>
        </div>
      </section>

      <section
        class="tournament-section"
        style="background-image: url('assets/images/pocket-samurai.jpg');"
      >
        <div class="tournament-content">
          <h2>Pocket Samurai</h2>
          <p>Hosted by Questing Gentlemen</p>
          <p><strong>Day:</strong> Sunday</p>
          <p><strong>Time:</strong> 10am</p>
          <p><strong>Format:</strong> Single Elimination</p>
          <a href="#" class="btn">Register Now</a>
        </div>
      </section>
  `,
  imports: [
    PageHeaderComponent
  ],
  styles: `
    h1 {
      text-align: center;
      margin: 40px 0 20px;
    }

    .tournament-section {
      position: relative;
      color: #fff;
      min-height: 300px;
      display: flex;
      align-items: center;
      padding: 40px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin-bottom: 20px;

      // Semi-transparent overlay for text contrast
      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }

      .tournament-content {
        position: relative;
        z-index: 2; // above the overlay
        max-width: 600px;
        margin-left: auto; // push content to the right side
        text-align: right;

        h2 {
          font-size: 2em;
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 10px;
          line-height: 1.5;
        }

        .btn {
          display: inline-block;
          padding: 10px 20px;
          background: #007BFF;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          margin-top: 10px;
          transition: background 0.2s ease;

          &:hover {
            background: #0056b3;
          }
        }
      }

      // For every even section, flip alignment (image on left, text on right, then reverse)
      &:nth-child(even) {
        justify-content: flex-start;

        .tournament-content {
          margin-right: auto;
          margin-left: 0;
          text-align: left;
        }
      }
    }

    // Responsive adjustments
    @media (max-width: 768px) {
      .tournament-section {
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        min-height: 400px;

        .tournament-content {
          margin: 0;
          max-width: 100%;
          text-align: center;
        }

        &:nth-child(even) {
          justify-content: center;
        }
      }
    }
  `,
})
export class TournamentGamesComponent {

}
