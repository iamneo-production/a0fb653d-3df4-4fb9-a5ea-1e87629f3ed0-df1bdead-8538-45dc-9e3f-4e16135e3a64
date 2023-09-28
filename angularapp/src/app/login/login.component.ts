import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";
  error: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  // login(): void {
  //   // Call the authentication service to login
  //   this.authService.login(this.username, this.password).subscribe(
  //     (user) => {
  //       console.log(user);

  //       if (user.role === 'ADMIN') {
  //         this.router.navigate(['/admin']); // Navigate to the Admin component
  //       } else if (user.role === 'ORGANIZER') {
  //         this.router.navigate(['/organizer']); // Navigate to the Organizer component
  //       }
  //     },
  //     (error) => {
  //       // Handle login error, display a message, etc.
  //     }
  //   );
  // }

  login(): void {
    console.log("fun"+this.username, this.password);

    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          // Successful login
          if (this.authService.isAdmin()) {
            this.router.navigate(['/admin']); // Navigate to admin page
          } else {
            this.router.navigate(['/organizer']); // Navigate to organizer page
          }
        },
        error => {
          this.error = 'Invalid username or password'; // Display error message
        }
      );
  }
}
