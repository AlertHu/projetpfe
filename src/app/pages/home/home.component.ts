import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContactComponent } from 'src/app/sharedpage/contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnChanges {
  constructor() {
    console.log('constructor')
  }
  ngOnChanges(){
    console.log('onchanges')
  }
  ngOnInit(): void {
    console.log('onInit')
  }
  
}
