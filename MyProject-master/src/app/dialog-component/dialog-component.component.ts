
import { Component, OnInit, Input, Output, OnChanges, EventEmitter, Inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css'],
})
export class DialogComponentComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    console.log(this.data)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
