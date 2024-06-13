import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private route: Router) {
    this.initialize();
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.initialize();
      }
    });
  }

  initialize() {
    setTimeout(() => {
      const sections = document.querySelectorAll('section');

      sections.forEach((section: HTMLElement) => {
        window.addEventListener('load', eventListener);
        window.addEventListener('scroll', eventListener);

        function eventListener() {
          let windowHeight = window.innerHeight;
          let sectionRectTop = section.getBoundingClientRect().top;

          if (sectionRectTop < windowHeight) {
            section.classList.add('active');
          }
        }

        window.addEventListener('scroll', () => {
          let reveals = section.querySelectorAll('.reveal');

          reveals.forEach((reveal, index) => {
            if(section.classList.contains('active')) {
              const delay = 600;

              setTimeout(() => {
                reveal.classList.add('active');
              }, index * delay)
            }
          })
        })

        window.addEventListener('load', () => {
          let reveals = section.querySelectorAll('.reveal');

          reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
            let revealRectTop = reveal.getBoundingClientRect().top;

            if (revealRectTop < windowHeight) {
              const delay = 600;
              setTimeout(() => {
                reveal.classList.add('active');
              }, index * delay);
            }
          })
        })
      });
    }, 10)
  }
}


