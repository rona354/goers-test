import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'goers-technical-test';

  headerOrNav: string = 'centered-with-bottom-border';
  container: string;
  elements: string;

  constructor() {}

  changeComponents(event: { title: any; item: string }) {
    switch (event.title) {
      case 'headers':
        this.headerOrNav = event.item;
        break;

      case 'app-shells':
        this.container = null;
        this.headerOrNav = event.item;

      case 'page-sections':
        this.container = event.item;

      case 'elements':
        this.elements = event.item;

      default:
        break;
    }
  }
}
