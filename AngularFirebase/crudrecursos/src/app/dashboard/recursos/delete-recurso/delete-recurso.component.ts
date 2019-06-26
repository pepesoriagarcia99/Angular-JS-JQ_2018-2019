import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Recurso } from '../interface/recurso.interface';
import { RecursoService } from '../service/recurso.service';


@Component({
  selector: 'app-delete-recurso',
  templateUrl: './delete-recurso.component.html',
  styleUrls: ['./delete-recurso.component.scss']
})
export class DeleteRecursoComponent implements OnInit {

  public recurso: Recurso;
  public id:string;

  constructor(
    public recursoService: RecursoService
  ) { }

  ngOnInit() {
  }
  editRecurso(id:string, data:any) {
    this.recursoService.update(id, data).subscribe();
  }
  

}
