import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-error-component',
  template: '<h2>Error 500: Internal Server Error</h2>',
})
export class UncaughtErrorComponent  { }
