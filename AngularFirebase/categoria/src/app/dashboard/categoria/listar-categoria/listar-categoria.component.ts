import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Categoria } from '../interface/categoria.interface';
import { CategoriaService } from '../service/categoria.service';


@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.scss']
})
export class ListarCategoriaComponent implements OnInit {

  public categoria: Categoria[];

  constructor(
    public categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(categoriaSnapshot => {
      this.categoria = [];
  
      categoriaSnapshot.forEach((categoria: any) => {
  
        const newRecurso = {
          id: categoria.payload.doc.id,
          categoria: categoria.payload.doc.categoria()
        };
      });
    });
  }

}
