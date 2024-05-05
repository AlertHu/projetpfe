import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})

export class OptionComponent {
  constructor(private router: Router) { }

// Gestionnaire d'événements pour le clic sur le bouton "Un étudiant"
onStudentButtonClick(): void {
    // Naviguer vers la route spécifiée pour les étudiants
    this.router.navigate(['/register']); // Remplacez 'student-route' par le nom de votre route pour les étudiants
}
onSteacherButtonClick(): void {
  // Naviguer vers la route spécifiée pour les étudiants
  this.router.navigate(['/enseignant']); // Remplacez 'student-route' par le nom de votre route pour les étudiants
}

}

