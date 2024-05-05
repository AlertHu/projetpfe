import { Component,OnInit} from '@angular/core';
import { Firestore  , collection , addDoc, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  UserData : any;
data: any;

  constructor(private firestore : Firestore) {
    this.getData();
  }
  ngOnInit(): void{}
  addData(f:any){
    const collectionInstance= collection(this.firestore , 'users');
    addDoc(collectionInstance , f.value).then(() => {
      console.log ('mesaage valide');
    })
    .catch((erro) => {
      console.log(erro);
    })
  }
  getData(){
    const collectionInstance = collection(this.firestore , 'users');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
    })
    this.UserData = collectionData(collectionInstance);
  }

}
