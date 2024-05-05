import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-success-message',
  templateUrl: './register-success-message.component.html',
  styleUrls: ['./register-success-message.component.scss']
})
export class RegisterSuccessMessageComponent implements OnInit {
  isChecked: boolean = false;
  constructor( ) {}
  ngOnInit(): void {
    
  }

}
