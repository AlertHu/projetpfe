import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lsi2',
  templateUrl: './lsi2.component.html',
  styleUrls: ['./lsi2.component.scss']
})
export class LSI2Component  implements OnInit {
  UserData!:Observable<any>;
data: any;

  constructor(private firestore : Firestore) {
    this.getData();
  }
  ngOnInit(): void{}
    getData(){
      const collectionInstance = collection(this.firestore, 'users');
      const wof = query(collectionInstance, where('classe', '==', 'Lsi2'));
      collectionData(collectionInstance).subscribe(val => {
        console.log(val);
      })
      this.UserData = collectionData(wof);
    }
    

  }