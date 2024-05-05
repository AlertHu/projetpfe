import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RecoverPasswordDialogComponent } from 'src/app/recover-password-dialog/recover-password-dialog.component';
import { ErrorDialogComponent } from 'src/app/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form!: FormGroup;
  isLoggingIn = false;
  isRecoveringPassword = false;
  emailNotFound: boolean = false;
  constructor(
    private dialog : MatDialog,
    private authentificationService: AuthentificationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  
  
  openDialog(message: string, showCheckbox: boolean): void {
    const dialogRef = this.dialog.open(RecoverPasswordDialogComponent, {
      width: '250px',
      data: { message: message, showCheckbox: showCheckbox }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  login() {
    this.isLoggingIn = true;
    const email = this.form.value.email;
    const password = this.form.value.password;
  
    // Vérifiez si l'adresse e-mail et le mot de passe sont enregistrés dans la base de données
    this.authentificationService.signInWithEmailAndPassword(email, password).subscribe(
      (user) => {
        // Utilisateur connecté avec succès
        this.isLoggingIn = false;
        this.router.navigate(['/profil']);
        this.openSuccessDialog(); // Ouvrir le dialogue de succès
      },
      (error) => {
        // Erreur lors de la connexion
        this.isLoggingIn = false;
        if (error.code === 'auth/user-not-found') {
          // L'utilisateur n'existe pas
          this.emailNotFound = true;
        } else {
          // Autre erreur
          console.error('Une erreur s\'est produite lors de la connexion:', error);
          this.openErrorDialog('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.');
        }
      }
    );
  }
  
  openSuccessDialog(): void {
    this.dialog.open(SuccessDialogComponent, {
      width: '250px',
      
      data: { message: 'Connexion réussie!' }
    });
  }
  
  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '250px',
      data: { errorMessage: errorMessage }
    });
  }
  



recoverPassword() {
  this.isRecoveringPassword = true;
  this.emailNotFound = false; // Réinitialiser la variable emailNotFound
  this.authentificationService.recoverPassword(this.form.value.email).subscribe(() => {
      this.isRecoveringPassword = false;
      // Ouvrir la boîte de dialogue avec le message approprié et la case à cocher
      this.openDialog("You can recover your password", true);
  }, (error: any) => {
      this.isRecoveringPassword = false;
      // Ouvrir la boîte de dialogue avec le message approprié et la case à cocher
      this.openDialog("Error recovering password", false);
  });
}

  signinWithGoogle(){
    this.authentificationService.signInWithGoogle().then((res: any) => {
      this.router.navigateByUrl('/profilutilisateur');

    }).catch((error: any ) =>{
      console.error(error);
  })
  }
}
