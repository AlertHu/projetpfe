import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../pages/services/authentification.service';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent  implements OnInit{
  userData: any;
  uid!: string;
reclamationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private firestore:AngularFirestore,
    private auth: AuthentificationService
  ) { }

  ngOnInit(): void {
    this.reclamationForm = this.formBuilder.group({
      subject: ['', Validators.required],
      description: ['', Validators.required],
      attachment: ['']
    });
  }

  onSubmit(): void {
    const user = this.auth.getCurrentUser();
    if (user) {
      this.uid = user.uid; // Assurez-vous que l'UID est correctement assigné
      this.auth.getUserData(this.uid).subscribe((data: any) => {
        console.log(data); // Log data to see if it's retrieved correctly
        this.userData = data;
      });
    }
    if (this.reclamationForm.valid) {
      // Créer un objet JSON avec les valeurs du formulaire
      const reclamationData = {
        subject: this.reclamationForm.value.subject,
        description: this.reclamationForm.value.description,
        attachment: this.reclamationForm.value.attachment
      };

      // Enregistrer les données de la réclamation dans Firestore
      this.firestore.collection('reclamations').add(reclamationData)
        .then(() => {
          console.log('Réclamation enregistrée avec succès dans Firestore.');
          // Réinitialiser le formulaire après l'envoi
          this.reclamationForm.reset();
        })
        .catch(error => {
          console.error('Erreur lors de l\'enregistrement de la réclamation dans Firestore :', error);
        });
    } else {
      console.error('Veuillez remplir correctement tous les champs du formulaire.');
    }
  }

}
