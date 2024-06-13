import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  standalone: true,
  selector: 'app-play-to-win',
  template: `
    <app-page-header pageName="Play to Win"></app-page-header>
    <section class="play-to-win-rules">
      <h1>Play to Win Rules</h1>
      <div class="rules-content">
        <p><strong>Friday: 10am-10pm</strong></p>
        <p><strong>Saturday: 9am-10pm</strong></p>
        <ul>
          <li>Checkout 1 game at a time per badge</li>
          <li>4 hours max checkout time</li>
          <li>Each person that plays the game can enter to win</li>
          <li>If you play any copy of the game during the convention, you can enter to win</li>
          <li>Only one entry per game per person</li>
          <li>Each badge can only win 1 game</li>
        </ul>
        <p><strong>Winners posted on Sunday at 5:00 PM near the library.</strong></p>
        <p>You must be present to win.</p>
        <p>All games not claimed by 5:30 PM will be given to whomever is present at that time that entered to win. We will randomize the list of entries and give it to the first person present after 5:30 PM.</p>
        <p>Winners can also be found online at: <a href="https://www.adventure-con.com/winners">adventure-con.com/winners</a></p>
      </div>
    </section>
  `,
  imports: [
    PageHeaderComponent
  ],
  styles: `
    .play-to-win-rules {
      background-color: #fff;
      padding: 50px 20px;
      max-width: 800px;
      margin: 0 auto;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    .play-to-win-rules h1 {
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

    .rules-content p {
      margin-bottom: 10px;
    }

    .rules-content a {
      color: #3498db;
      text-decoration: none;
      font-weight: bold;
    }

    .rules-content a:hover {
      text-decoration: underline;
    }

  `
})
export class PlayToWinComponent {

}
