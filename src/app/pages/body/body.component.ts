import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  getBodyClass():string{
    let styeClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styeClass = 'body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styeClass = 'body-md-screen'
    }
    return styeClass;
  }

}
