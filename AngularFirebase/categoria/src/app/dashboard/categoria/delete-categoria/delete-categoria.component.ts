mport { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Categoria } from '../interface/categoria.interface';
import { CategoriaService } from '../service/categoria.service';


@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.scss']
})
export class DeleteCategoriaComponent implements OnInit {

  public categoria: Categoria;
  public id:string;

  constructor(
    public categoriaService: CategoriaService
  ) { }

  ngOnInit() {
  }
  editCategoria(id:string, data:any) {
    this.categoriaService.update(id, data).subscribe();
  }
  

}
