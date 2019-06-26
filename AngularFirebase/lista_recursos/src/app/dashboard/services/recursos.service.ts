import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

const nodeUrl = '/recursos';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private firestore: AngularFirestore) { }

  // Obtiene todos los recursos
  getRecursos() {
    return this.firestore.collection(nodeUrl).snapshotChanges();
  }
}
