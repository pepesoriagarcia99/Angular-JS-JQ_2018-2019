import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.scss']
})
export class AddCategoriaComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection('/categoria');
    this.items = this.itemsCollection.valueChanges();
  }
  
  ngOnInit() {
  }

  addNewCategoria() {
    this.db.collection('categoria').add({
      title: 'Inteligencia artificial',
      content: 'Ensayo científico',
      autor: 'Alan Turing',
      anyo: 1912
    })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
        this.items = this.db.collection('/recursos').valueChanges();
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }
}
