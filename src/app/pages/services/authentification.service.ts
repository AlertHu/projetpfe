import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';

import { from, Observable, of, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  isLoggedIn = false;
  private currentUser: any | null = null;
  CurrentUser$: any;
  isLoggedIn$: Observable<boolean>;
  authState: any;
  userToken: string | undefined;

  constructor(
    private router: Router,

    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
  ) {

    this.isLoggedIn$ = this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return of(true);
        } else {
          return of(false);
        }
      })
    )
  }
  getUserData(uid: string) {
    return this.firestore.collection('users').doc(uid).valueChanges();

  }

  signInWithEmailAndPassword(email: string, password: string): Observable<any> {
    return new Observable<any>((observer) => {
      this.auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        
          const user = userCredential.user;
          observer.next(userCredential);
          observer.complete();
          if (user) {
            this.setUser(user);
            return this.firestore.collection('users').doc(user.uid).valueChanges();
          } else {
            throw new Error('L\'utilisateur n\'a pas été créé correctement');
          }
          
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }


  recoverPassword(email: string): Observable<void> {
    return from(this.auth.sendPasswordResetEmail(email));

  }
  signInWithGoogle() {
    return this.auth.signInWithPopup(new GoogleAuthProvider());
  }
  registerWithEmailAndPassword(email: string, password: string, otherDetails: any): Promise<any> {
    // Utilisez la méthode AngularFireAuth pour l'authentification par email et mot de passe
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.router.navigate(['/signin']);
        if (user) {
          this.setUser(user);
          return this.firestore.collection('users').doc(user.uid).set(otherDetails);
        } else {
          throw new Error('L\'utilisateur n\'a pas été créé correctement');
        }
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        if (error.code === 'auth/email-already-in-use') { }
        throw error;
        // Re-lancer l'erreur pour la gérer à l'endroit où cette méthode est appelée
      });
  }

  logout() {
    this.auth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/signin']);
    }, err => {
      alert(err.message);
    });
  }
  setUser(user: any): void {
    this.currentUser = user;
  }
  getCurrentUser(): any | null {
    return this.currentUser;
  }

}
type signIn = {
  email: string;
  password: string;
}

