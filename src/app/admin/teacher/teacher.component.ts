import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  UserData!:Observable<any>;
data: any;

  constructor(private firestore : Firestore) {
    this.getData();
  }
  ngOnInit(): void{}
    getData(){
      const collectionInstance = collection(this.firestore, 'users');
      const wof = query(collectionInstance, where('role', '==', 'enseignant'

      
      ));
      collectionData(collectionInstance).subscribe(val => {
        console.log(val);
      })
      this.UserData = collectionData(wof);
    }
    

  }