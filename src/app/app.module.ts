import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,MapaComponent
    // AgmCoreModule.forRoot({ apiKey: 'AIzaSyAe43Dr1LYNEBhj1BWGosOSBpD'}) 
  ],
  imports: [
    
    BrowserModule,
    RouterModule ,
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey:'AIzaSyAe43Dr1LYNEBhj1BWGosOSBpD-RiVtzQo'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
