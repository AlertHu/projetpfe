import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  UserData!:Observable<any>;
data: any;

  constructor(private firestore : Firestore) {
    this.getData();
  }
  ngOnInit(): void{}
    getData(){
      const collectionInstance = collection(this.firestore, 'users');
      const wof = query(collectionInstance, where('username', '==', 'eya'));
      collectionData(collectionInstance).subscribe(val => {
        console.log(val);
      })
      this.UserData = collectionData(wof);
    }
    

  }



