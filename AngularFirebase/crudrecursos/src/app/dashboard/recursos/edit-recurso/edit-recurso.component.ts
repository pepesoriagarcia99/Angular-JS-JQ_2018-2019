import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Recurso } from '../interface/recurso.interface';
import { RecursoService } from '../service/recurso.service';

@Component({
  selector: 'app-edit-recurso',
  templateUrl: './edit-recurso.component.html',
  styleUrls: ['./edit-recurso.component.scss']
})
export class EditRecursoComponent implements OnInit {

  constructor(
    public recursoService: RecursoService
  ) { }

  ngOnInit() {
  }
  deleteRecurso(id:string) {
    this.recursoService.delete(id).subscribe();
  }

}
