import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';

// Angular Maps
import { AgmCoreModule } from '@agm/core';
import { MapEditComponent } from './components/map/map-edit.component';

// for working @types/googlemaps@3.39.13

@NgModule({
  declarations: [AppComponent, MapComponent, MapEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material Angular
    MaterialModule,

    // Angular Maps
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
