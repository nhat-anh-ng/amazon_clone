import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    private auth: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router,
  ) { 
    this.auth.authState.subscribe(user => {
      if(user){
        this.userData = user;
        localStorage.setItem('user', this.userData.email)
      }
    })
  }
  signIn(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password).then((result) => {
      this.router.navigate(['/'])
    }).catch((err) => {
      window.alert(err.message)
    })
  }
  signUp(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.router.navigate(['/'])
    }).catch((err) => {
      window.alert(err.message)
    })
  }
  logOut(){
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user')
      this.router.navigate(['/login']);
    })
  }
  isLoggedIn(){
    const user = localStorage.getItem('user');
    return user? true : false;
  }
  getUser(){
    const user = localStorage.getItem('user')
    return user? user: null;
  }
}
