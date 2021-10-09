import { Component } from '@angular/core';
import LINKS from '../../../../common/links.json';
const { Instructions, Swagger, Design } = LINKS;

@Component({
  selector: 'mono-nx-test-with-nextjs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fe-wtc-tech-test-angularv2';
  links = [Instructions, Swagger, Design].map((value) => value);
  logo = '../assets/testflix_logo.png';
}
