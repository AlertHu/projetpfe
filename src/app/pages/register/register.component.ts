import { Component, OnInit, inject } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firestore from '@angular/fire/compat'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  isSignedIn = false;
  UserData: any = {};
  isEnseignant: boolean = false;
  isEtudiant: boolean = false;


  constructor(private authentificationService: AuthentificationService,
    private router: Router,
    private firestore: AngularFirestore,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Name: ["", Validators.required],
      username: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: [''],
      matieres: [''],
      classes: [''],
      classe: ['']
    });

  }


  registerWithEmailAndPassword() {
    if (this.registerForm.valid) {
      const userData = {
        name: this.registerForm.get('Name')?.value, // Modifié 'username' en 'Name'
        username: this.registerForm.get('username')?.value,
        phoneNumber: this.registerForm.get('phoneNumber')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        confirmPassword: this.registerForm.get('confirmPassword')?.value,
        role: this.registerForm.get('role')?.value,
        matieres: this.registerForm.get('matieres')?.value,
        classes: this.registerForm.get('classes')?.value,
        classe: this.registerForm.get('classe')?.value
      };


      // Vérification de la correspondance des mots de passe
      if (userData.password !== userData.confirmPassword) {
        console.error('Les mots de passe ne correspondent pas');
        return;
      }
      //

      this.authentificationService.registerWithEmailAndPassword(userData.email, userData.password, userData)
        .then((res: any) => {
          // Compte créé avec succès
          console.log('Compte créé avec succès');
          const user = {
            username: userData.username,
            email: userData.email,
          };

        })
        .catch((error: any) => {
          console.error(error);
        });
    } else {
      console.error('Veuillez remplir tous les champs du formulaire correctement');
    }
  }


  handleLogout() {
    this.isSignedIn = false;
  }
  selectedImage: string | ArrayBuffer | null = null;



  onRoleChange(event: any) {
    const role = event.target?.value;
    if (role === 'enseignant') {
      this.isEnseignant = true;
      this.isEtudiant = false;
    } else if (role === 'etudiant') {
      this.isEnseignant = false;
      this.isEtudiant = true;
    } else {
      this.isEnseignant = false;
      this.isEtudiant = false;
    }
  }

  onSubmit() {


    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      console.log('Invalid form');
    }
  }


}
