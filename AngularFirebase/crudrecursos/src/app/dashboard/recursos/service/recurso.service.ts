import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CreateNoteDto } from '../dto/create-recurso.dto';


const nodeUrl = '/recursos';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  
  constructor(
    private firestore: AngularFirestore
  ) {}

  // Crea una nueva nota
  public create(data: CreateNoteDto) {
    return this.firestore.collection(nodeUrl).add(data);
  }

  // Obtiene una nota
  public getOne(documentId: string) {
    return this.firestore.collection(nodeUrl).doc(documentId).snapshotChanges();
  }

  // Obtiene todas las notas
  public getAll() {
    return this.firestore.collection(nodeUrl).snapshotChanges();
  }

  // Actualiza una nota
  public update(documentId: string, data: any) {
    return this.firestore.collection(nodeUrl).doc(documentId).set(data);
  }
  // delete una nota
  public delete(documentId: string) {
    return this.firestore.collection(nodeUrl).doc(documentId);
  }
}
