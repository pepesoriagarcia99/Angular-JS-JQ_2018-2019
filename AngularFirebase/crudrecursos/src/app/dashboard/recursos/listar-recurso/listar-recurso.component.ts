import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Recurso } from '../interface/recurso.interface';
import { RecursoService } from '../service/recurso.service';


@Component({
  selector: 'app-listar-recurso',
  templateUrl: './listar-recurso.component.html',
  styleUrls: ['./listar-recurso.component.scss']
})
export class ListarRecursoComponent implements OnInit {

  public recurso: Recurso[];

  constructor(
    public recursoService: RecursoService
  ) { }

  ngOnInit() {
    this.recursoService.getAll().subscribe(recursoSnapshot => {
      this.recurso = [];
  
      recursoSnapshot.forEach((recurso: any) => {
  
        const newRecurso = {
          id: recurso.payload.doc.id,
          recurso: recurso.payload.doc.recurso()
        };
      });
    });
  }

}
