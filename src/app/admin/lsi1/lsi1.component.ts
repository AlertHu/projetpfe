import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lsi1',
  templateUrl: './lsi1.component.html',
  styleUrls: ['./lsi1.component.scss']
})
export class LSI1Component implements OnInit {
  UserData!:Observable<any>;
data: any;

  constructor(private firestore : Firestore) {
    this.getData();
  }
  ngOnInit(): void{}
    getData(){
      const collectionInstance = collection(this.firestore, 'users');
      const wof = query(collectionInstance, where('classe', '==', 'Lsi1'

      
      ));
      collectionData(collectionInstance).subscribe(val => {
        console.log(val);
      })
      this.UserData = collectionData(wof);
    }
    

  }