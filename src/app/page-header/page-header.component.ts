import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  template: `
    <section class="page-header">
      <h1>{{ pageName() }}</h1>
      <nav class="breadcrumb">
        <a [routerLink]="'/'">Home</a> / <span>{{ pageName() }}</span>
      </nav>
    </section>
  `,
  styles: `
    .page-header {
      background-color: #000;
      color: #fff;
      text-align: center;
      padding: 50px 20px;
    }

    .page-header h1 {
      font-size: 2.5em;
      margin: 0;
    }

    .breadcrumb {
      font-size: 1em;
      margin-top: 10px;
    }

    .breadcrumb a {
      color: #f39c12;
      text-decoration: none;
    }

    .breadcrumb span {
      color: #fff;
    }
  `,
  imports: [
    RouterLink
  ],
  selector: `app-page-header`
})
export class PageHeaderComponent {
  pageName = input();
}
