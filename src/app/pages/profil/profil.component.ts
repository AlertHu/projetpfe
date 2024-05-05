import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit, OnDestroy  {
  constructor(private navbarService: NavbarService){}
  ngOnInit(): void {
    this.navbarService.hide();
  }
 
ngOnDestroy(): void {
  this.navbarService.display();
  
}

  showHorizontalMenu: boolean = false;
 

  toggleHorizontalMenu() {
    this.showHorizontalMenu = !this.showHorizontalMenu;
  }

}
