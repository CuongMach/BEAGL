import { Component } from '@angular/core';
import {AuthenticationService} from './service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-service';
  message = '';

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.testJwt().subscribe(value => this.message = value);
  }

  logout() {
    this.authenticationService.logout();
  }
}
