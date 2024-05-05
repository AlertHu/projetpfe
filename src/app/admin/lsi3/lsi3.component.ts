import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lsi3',
  templateUrl: './lsi3.component.html',
  styleUrls: ['./lsi3.component.scss']
})
export class LSI3Component implements OnInit {
  UserData!:Observable<any>;
data: any;

  constructor(private firestore : Firestore) {
    this.getData();
  }
  ngOnInit(): void{}
    getData(){
      const collectionInstance = collection(this.firestore, 'users');
      const wof = query(collectionInstance, where('classe', '==', 'Lsi3'));
      collectionData(collectionInstance).subscribe(val => {
        console.log(val);
      })
      this.UserData = collectionData(wof);
    }
    

  }