import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NoteListComponent } from './note-list/note-list.component';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { CComponent } from './c/c.component';
import { ListarComponent } from './recursos/listar/listar.component';
import { AddRecursoComponent } from './recursos/add-recurso/add-recurso.component';
import { EditRecursoComponent } from './recursos/edit-recurso/edit-recurso.component';
import { DeleteRecursoComponent } from './recursos/delete-recurso/delete-recurso.component';
import { ListarRecursoComponent } from './recursos/listar-recurso/listar-recurso.component';
import { ListRecursoComponent } from './list-recurso/list-recurso.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [ DashboardComponent, NoteListComponent, CComponent, ListarComponent, AddRecursoComponent, EditRecursoComponent, DeleteRecursoComponent, ListarRecursoComponent, ListRecursoComponent ]
})

export class DashboardModule {}
