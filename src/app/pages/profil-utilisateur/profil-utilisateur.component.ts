import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.scss']
})
export class ProfilUtilisateurComponent implements OnInit {
  userData: any;
  uid!: string;

  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {
    // Récupérer l'UID de l'utilisateur connecté
    const user = this.auth.getCurrentUser();
    if (user) {
      this.uid = user.uid; // Assurez-vous que l'UID est correctement assigné
      this.auth.getUserData(this.uid).subscribe((data: any) => {
        console.log(data); // Log data to see if it's retrieved correctly
        this.userData = data;
      });
    }
  }
}