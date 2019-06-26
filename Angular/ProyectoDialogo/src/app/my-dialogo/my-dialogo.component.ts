import { Component, OnInit } from '@angular/core';
//esto
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-my-dialogo',
  templateUrl: './my-dialogo.component.html',
  styleUrls: ['./my-dialogo.component.css']
})
export class MyDialogoComponent implements OnInit {

  constructor(dialogRef: MatDialogRef<MyDialogoComponent>) { }

  ngOnInit() {
  }

}
