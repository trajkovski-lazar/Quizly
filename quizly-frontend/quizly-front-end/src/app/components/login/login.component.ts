import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { fromEventPattern } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void { }

  signIn(form: NgForm) {
      this.authenticationService.login(form.value.identifier, form.value.password).subscribe(
        response => { 
          localStorage.setItem('token', response.jwt);
          this.router.navigateByUrl('/categories');
        } 
      );   
  }
}
