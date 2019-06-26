import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MyDialogoComponent} from './my-dialogo/my-dialogo.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoDialogo';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    //const dialogRef = this.dialog.open(MyDialogoComponent, {width: '250px'});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogoComponent, {width: '250px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
