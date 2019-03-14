import{Subject} from 'rxjs/Subject'
import { user } from './app.user';
import { Authorisation } from './authorisation';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from './User';
@Injectable()
export class AppValidation{
    private user: user
    private User:User
    private autho:Authorisation
    authState: any = null;
     
    AuthChange= new Subject<boolean>()
    
   
    constructor(public afAuth: AngularFireAuth, 
        public afs: AngularFirestore,   
        public ngZone: NgZone ,
        private Route: Router,
        public router: Router

      ) { 
        this.afAuth.authState.subscribe((auth) => {
          this.authState = auth
        });
      }
    RegisterUSer(Auth: Authorisation){
        this.user={
            email:Auth.email,
            UserId:Math.round(Math.random() * 1000).toString(),
            password:Auth.password

        }
        this.AuthChange.next(true);
        this.Route.navigate(['/Training'])
    }
    Login(Auth: Authorisation,pswd){
      this.user={
        email:Auth.email,
        UserId:Math.round(Math.random() * 1000).toString(),
        password:Auth.password
    }
    if(this.user.email===pswd){
      console.log(this.user.email);
      console.log(pswd)
    }
    
    }
    getUSer(){
        return {...this.user};
    }
    isAuth(){
        return this.user!=null;
    }
    SetUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          
        }
        return userRef.set(userData, {
          merge: true
        })
      }
     // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
        this.AuthChange.next(true);
         this.Route.navigate(['/Training'])
      
    })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail(); // Sending email verification notification, when new user registers
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      if (result.user.emailVerified !== true) {
        this.SendVerificationMail();
        window.alert('Please validate your email address. Kindly check your inbox.');
      } else {
        this.ngZone.run(() => {
          this.AuthChange.next(true);
          this.router.navigate(['/Training']);
        });
      }
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
}

  }
