import { Component,Output,EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Output() onTaggleSideNav:EventEmitter<SideNavToggle> = new EventEmitter();
   collapsed =false;
   screenWidth=0;
   navData = navbarData;

   toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onTaggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
   }

   closeSidenav(): void {
    this.collapsed = false;
    this.onTaggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
   }
   // Définir une propriété booléenne pour suivre l'état d'affichage de "td" et "tp"
showTD: boolean = false;
showTP: boolean = false;

// Méthodes pour basculer l'état d'affichage de "td" et "tp"
toggleTD() {
  this.showTD = !this.showTD;
}

toggleTP() {
  this.showTP = !this.showTP;
}

}
