import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  isLogOutOpen = false;

  ngOnInit(): void {
  }

  openLogOut() {
    if (this.isLogOutOpen) 
      this.isLogOutOpen = false;
    
    else if (!this.isLogOutOpen) 
      this.isLogOutOpen = true;
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
