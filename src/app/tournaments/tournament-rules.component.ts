import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-tournament-rules',
  standalone: true,
  template: `
    <app-page-header pageName="Tournament Rules"></app-page-header>
    <section class="tournament-rules">
      <h1>Tournament Rules</h1>
      <div class="rules-content">
        <h2>Age Requirements</h2>
        <ul>
          <li>Each game will specify its minimum and maximum age range.</li>
          <li>Participants must meet the age requirements for each specific game.</li>
        </ul>
        <h2>Tournament Format</h2>
        <ul>
          <li>All tournaments are single elimination unless explicitly stated otherwise.</li>
          <li>Once a participant loses a match, they are eliminated from that tournament.</li>
        </ul>
        <h2>Sign-Up Process</h2>
        <ul>
          <li>Sign-ups are on a first-come, first-served basis.</li>
          <li>Online sign-ups are available through tabletop.events.</li>
          <li>In-person sign-ups are available for those who did not sign up online, subject to remaining availability.</li>
        </ul>
        <h2>Match Conduct</h2>
        <ul>
          <li>Be positive and supportive of all participants.</li>
          <li>No trash talking or negative comments.</li>
          <li>Good sportsmanship is expected at all times.</li>
        </ul>
        <h2>Game Rules</h2>
        <ul>
          <li>Follow the specific rules for each game as provided by the tournament organizers.</li>
          <li>Any disputes will be resolved by the tournament judge, whose decision is final.</li>
        </ul>
        <h2>Punctuality</h2>
        <ul>
          <li>Participants must arrive at their scheduled match time.</li>
          <li>Failure to arrive on time may result in disqualification.</li>
        </ul>
        <h2>Equipment</h2>
        <ul>
          <li>All necessary game equipment will be provided.</li>
          <li>Personal game pieces or equipment are not allowed unless specified.</li>
        </ul>
        <h2>Respect</h2>
        <ul>
          <li>Respect all participants, organizers, and staff.</li>
          <li>Any form of harassment or bullying will result in immediate disqualification and removal from the event.</li>
        </ul>
      </div>
    </section>

  `,
  imports: [
    PageHeaderComponent
  ],
  styles: `
    .tournament-rules {
      background-color: #fff;
      padding: 50px 20px;
      max-width: 800px;
      margin: 0 auto;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    .tournament-rules h1 {
      font-size: 2.5em;
      text-align: center;
      margin-bottom: 20px;
    }

    .rules-content {
      font-size: 1.2em;
      color: #333;
    }

    .rules-content ul {
      list-style-type: disc;
      padding-left: 20px;
      margin-bottom: 20px;
    }

    .rules-content ul li {
      margin-bottom: 10px;
    }

    .rules-content h2 {
      font-size: 1.5em;
      margin-top: 20px;
      margin-bottom: 10px;
    }

  `
})
export class TournamentRulesComponent {

}
