import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-winners',
  standalone: true,
  template: `
    <app-page-header pageName="Winners"></app-page-header>
    <section class="winner-section">
      <h2>Looks like all games have been won!</h2>
    </section>
  `,
  styles: ``,
  imports: [
    PageHeaderComponent
  ]
})
export class WinnersComponent {

}
