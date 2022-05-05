import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.loginForm.value).subscribe(user => {
      localStorage.setItem('ACCESS_TOKEN', user.token);
      this.router.navigateByUrl('/');
    });
  }
}
