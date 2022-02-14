import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

constructor(private authenticationService: AuthenticationService, private router: Router) { }

  username: string = "";
  email: string = "";
  password: string = "";

  ngOnInit(): void {
  }

  signUp() {
     this.authenticationService.register(this.username, this.email, this.password).subscribe(

      response => {
        localStorage.setItem('token', response.jwt);
        this.router.navigateByUrl('/categories');
      }
     )
    }
  }

