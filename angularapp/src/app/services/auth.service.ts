import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<string | null>;
  public currentUser: Observable<string | null>;
  private baseUrl = 'https://8080-cebebeefeaceeddcadfefddfbdeaddcefeea.premiumproject.examly.io/api'; // Replace with your Spring Boot backend URL
  private userRoleSubject = new BehaviorSubject<string>('');
  userRole$: Observable<string> = this.userRoleSubject.asObservable();
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<string | null>(
      localStorage.getItem('currentUser')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // login(username: string, password: string): Observable<any> {
  //   const body = { username, password };
  //   console.log(body)
  //   return this.http.post<any>(`${this.baseUrl}/auth/login`, body).pipe(
  //     tap((user) => this.storeUserData(user)),
  //     catchError(this.handleError<any>('login'))
  //   );
  // }

  register(username: string, password: string, role: string): Observable<any> {
    const body = { username, password, role };
    console.log(body);

    return this.http.post<any>(`${this.baseUrl}/auth/register`, body).pipe(
      tap((user) => this.storeUserData(user)),
      catchError(this.handleError<any>('register'))
    );
  }

  isLoggedIn(): boolean {
    // Check if the user token exists in localStorage
    console.log(localStorage.getItem('token'));

    return !!localStorage.getItem('token');
  }

  // getUserRole(): string {
  //   // Get the user role from localStorage
  //   const role=localStorage.getItem('userRole') || '{}';
  //   console.log("userrole"+role)
  //   return role;
  // }

  getUserRole(): Observable<string> {
    return this.userRole$;
  }

  // logout(): void {
  //   // Clear the user data from localStorage
  //   localStorage.removeItem('userToken');
  //   localStorage.removeItem('userRole');
  // }

  private storeUserData(user: any): void {
    // Save the user token and role in localStorage
    localStorage.setItem('userToken', user.token);
    localStorage.setItem('userRole', user.role);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Handle the error (you can log it or perform other actions)
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post<any>(`${this.baseUrl}/auth/login`, loginData)
      .pipe(
        tap(response => {
          console.log(response.token);
          console.log(response.token.username);

          // Store the token in localStorage or a more secure storage method
          localStorage.setItem('token', response.token);
          this.userRoleSubject.next(response.role);
          this.isAuthenticatedSubject.next(true); // Notify observers that the user is authenticated


        })
      );
  }

  logout(): void {
    // Remove the token from storage upon logout
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated by verifying the token
    const token = localStorage.getItem('token');
    console.log(token);

    return !!token; // Return true if the token exists
  }

  isAdmin(): boolean {
    // Check if the user has the 'admin' role based on your token structure
    const token = localStorage.getItem('token');
    if (token) {
      console.log("token:"+token);

      // Decode the token and check if it contains the 'admin' role
      const decodedToken = this.decodeToken(token);
      console.log("dummy"+decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);

      return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'admin';
    }
    return false; // Return false if the token is not present or doesn't have 'admin' role
  }

  isOrganizer(): boolean {
    // Check if the user has the 'admin' role based on your token structure
    const token = localStorage.getItem('token');
    if (token) {
      console.log("token:"+token);

      // Decode the token and check if it contains the 'admin' role
      const decodedToken = this.decodeToken(token);
      console.log("dummy"+decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);

      return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'organizer';
    }
    return false; // Return false if the token is not present or doesn't have 'admin' role
  }

  private decodeToken(token: string): any {
    // You can use a library like jwt-decode to decode JWT tokens
    // Example: return jwt_decode(token);
    // For simplicity, you can parse the token as JSON (not recommended for production)
    try {
      console.log("decode"+token);
      var decode = JSON.parse(atob(token.split('.')[1]));
      console.log(decode['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);

      return decode
    } catch (error) {
      return null;
    }
  }
}
