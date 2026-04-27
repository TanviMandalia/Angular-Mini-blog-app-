import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
   login(username: string, password: string) {
    if (username === 'User' && password === '1234') {
      sessionStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('loggedIn');
  }

  isLoggedIn() {
    return sessionStorage.getItem('loggedIn') === 'true';
  }
}
