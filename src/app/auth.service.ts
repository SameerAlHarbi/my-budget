import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationChanged = new Subject<void>();

  private loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 400);
      }
    );

    return promise;
  }

  constructor() { }

  login() {
    this.loggedIn = true;
    this.authenticationChanged.next();
  }

  logout() {
    this.loggedIn = false;
    this.authenticationChanged.next();
  }
}
