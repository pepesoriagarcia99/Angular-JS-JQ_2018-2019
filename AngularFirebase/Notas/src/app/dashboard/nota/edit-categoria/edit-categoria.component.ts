import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Categoria } from '../interface/categoria.interface';
import { CategoriaService } from '../service/nota.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-recucategoriarso.component.scss']
})
export class EditCategoriaComponent implements OnInit {

  constructor(
    public categoriaService: CategoriaService
  ) { }

  ngOnInit() {
  }
  deleteRecurso(id:string) {
    this.categoriaService.delete(id).subscribe();
  }

}
