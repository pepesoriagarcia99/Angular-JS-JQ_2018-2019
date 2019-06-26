import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../services/recursos.service';
import { Recurso } from '../interfaces/recurso.interface';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  public recursos: Recurso[];

  constructor(private serviceRecursos: RecursosService) {}

  ngOnInit() {
    this.serviceRecursos.getRecursos().subscribe(recursosSnapshot => {
      this.recursos = [];
      recursosSnapshot.forEach((recurso: any) => {
        const newRecurso = {
          id: recurso.payload.doc.id,
          data: recurso.payload.doc.data()
        };
        this.recursos.push(newRecurso);
      });
    });
  }
  

}
