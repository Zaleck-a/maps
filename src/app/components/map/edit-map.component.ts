import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.css']
})
export class EditMapComponent implements OnInit {

  form: FormGroup;

  constructor(public fb:FormBuilder, public dialogRef: MatDialogRef<EditMapComponent>,
             @Inject(MAT_DIALOG_DATA) public data: any) { 

              this.form = fb.group({
                'title': data.title,
                'desc': data.desc
              })

             }

  ngOnInit(): void {
  }

  saveChanges(){
    this.dialogRef.close( this.form.value );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
