import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  standalone: true,
  selector: 'app-hotel',
  template: `
    <app-page-header pageName="Hotel Information"></app-page-header>
  `,
  imports: [
    PageHeaderComponent
  ],
  styles: ``
})
export class HotelInformationComponent {

}
