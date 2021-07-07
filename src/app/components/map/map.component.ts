import { Component, OnInit } from '@angular/core';
import { Pointer } from 'src/app/classes/pointer.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  pointers: Pointer[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() { 
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
  }

  saveStorage(){
    localStorage.setItem('pointer', JSON.stringify(this.pointers));
  }

  deletePointer(index: number){
    this.pointers.splice(index, 1);
    this.saveStorage();
  }

}
