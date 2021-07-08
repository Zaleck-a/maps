import { Component, OnInit } from '@angular/core';
import { Pointer } from 'src/app/classes/pointer.class';

import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EditMapComponent } from './edit-map.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  pointers: Pointer[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(private snackBar: MatSnackBar, 
              public dialog: MatDialog) { 
    const pointersStorage = localStorage.getItem('pointer');
    if(pointersStorage){
      this.pointers = JSON.parse(pointersStorage);
    }
  }

  ngOnInit(): void {
  }

  addPointer(e: any){

    const cords: { lat: number, lng: number } = e.coords
    
    const newPointer = new Pointer(cords.lat, cords.lng);
    this.pointers.push(newPointer);
    
    localStorage.setItem('pointer', JSON.stringify(this.pointers));
    this.saveStorage();

    this.snackBar.open('Added pointer', 'Close', {
      duration: 3000
    });
  }

  saveStorage(){
    localStorage.setItem('pointer', JSON.stringify(this.pointers));
  }

  editPointer(pointer: Pointer){

    const dialogRef = this.dialog.open(EditMapComponent, {
      width: '250px',
      data: {title: pointer.title, desc: pointer.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(!result){
        return;
      }

      pointer.title = result.title;
      pointer.desc = result.desc;
      this.saveStorage();
      this.snackBar.open('Update pointer', 'Close', {
        duration: 3000
      });
    });

  }

  deletePointer(index: number){
    this.pointers.splice(index, 1);
    this.saveStorage();

    this.snackBar.open('Pointer removed', 'Close', {
      duration: 3000
    });
  }
}
