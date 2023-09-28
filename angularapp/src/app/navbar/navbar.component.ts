// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   isLoggedIn: boolean;
//   isAdmin: boolean = false; // Initialize isAdmin
//   isOrganizer: boolean = false; // Initialize isOrganizer

//   constructor(private authService: AuthService, private router: Router) {
//     this.isLoggedIn = this.authService.isAuthenticated();

//     if (this.isLoggedIn) {
//       // Initialize isAdmin and isOrganizer based on user role
//       this.isAdmin = this.authService.isAdmin();
//       this.isOrganizer = this.authService.isOrganizer();
//     }
//   }

//   logout(): void {
//     this.authService.logout();
//     this.router.navigate(['/login']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  isOrganizer: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthenticated$.subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
      if (this.isLoggedIn) {
        this.isAdmin = this.authService.isAdmin();
        this.isOrganizer = this.authService.isOrganizer();
      } else {
        this.isAdmin = false;
        this.isOrganizer = false;
      }
    });
  }

  ngOnInit(): void {
    // Initialize the properties on component initialization
    this.isLoggedIn = this.authService.isAuthenticated();
    if (this.isLoggedIn) {
      this.isAdmin = this.authService.isAdmin();
      this.isOrganizer = this.authService.isOrganizer();
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.isOrganizer = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

