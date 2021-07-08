import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { MapComponent } from './components/map/map.component';
import { EditMapComponent } from './components/map/edit-map.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EditMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBDvIHWsNajc1wIWfR__LRiEk0Wy5whVg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
