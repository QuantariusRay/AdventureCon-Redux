import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  template: `
    <footer>
      <ul>
        <li><a href="https://www.facebook.com/events/338272502413095">Facebook</a></li>
        <li><a href="https://x.com/adventure_con">X</a></li>
        <li><a href="https://www.instagram.com/adventureconnwa">Instagram</a></li>
      </ul>
    </footer>
  `,
  styles: `
    :host {
      display: block;
    }

    footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 20px 0;
    }

    footer ul {
      list-style: none;
      padding: 0;
    }

    footer ul li {
      display: inline;
      margin: 0 10px;
    }

    footer ul li a {
      color: white;
      text-decoration: none;
    }
  `,
  imports: []
})
export class FooterComponent {

}
