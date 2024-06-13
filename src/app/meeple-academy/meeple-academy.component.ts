import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { faBullhorn, faLaptop, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ListCardComponent } from '../cards/list-card.component';


@Component({
  selector: 'app-meeple-academy',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ListCardComponent
  ],
  template: `
    <app-page-header pageName="Meeple Academy"></app-page-header>
    <div class="page-container">
      <h2>What We Do</h2>
      <div class="cards-container">
        @for (content of contentList; track content) {
          <list-card [contentHeader]="content.contentHeader"
                     [contentText]="content.contentText"
                     [contentClass]="content.class"
                     [contentIcon]="content.icon">
          </list-card>
        }
      </div>
      <h2>Get Involved</h2>

      <p class="centered">
        AdventureCon will be back in 2025. Volunteer sign-up will open when dates are announced.
      </p>
    </div>
  `,
  styles: `
    h2, .centered {
      text-align: center;
    }

    .cards-container {
      margin-bottom: 2rem;
    }

    .page-container {
      padding: 1rem 2rem;
    }

    list-card {
      @media (min-width: 768px) {
        display: block;
        margin-bottom: 2rem;
      }
    }
  `
})
export class MeepleAcademyComponent {
  laptop = faLaptop;
  users = faUsers;
  bullhorn = faBullhorn;

  contentList = [
    {
      icon: this.laptop,
      contentHeader: 'Educational Outreach',
      contentText: 'We provide public facilities such as schools and libraries with board games to enrich educational experiences and promote social engagement. By incorporating board games into learning environments, we aim to enhance critical thinking, communication, and teamwork skills while fostering a love for learning through play.',
      class: 'outreach'
    },
    {
      icon: this.users,
      contentHeader: 'Community Engagement',
      contentText: 'We actively engage with the community by organizing public board game events at local schools, community centers, and businesses. Through these events, we aim to introduce people of all ages to the joys of tabletop gaming, foster social interaction, and promote problem-solving skills in a fun and inclusive environment.',
      class: 'engagement'
    },
    {
      icon: this.bullhorn,
      contentHeader: 'Social Events',
      contentText: 'We host social events that bring members of the community together for board gaming fun and friendship. Join us for evenings filled with laughter, camaraderie, and of course, plenty of tabletop gaming. Whether you\'re a seasoned gamer or new to the hobby, our events provide a welcoming space to connect over games, enjoy drinks, and forge lasting friendships.',
      class: 'events'
    }
  ]
}

