import { NgModule , Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';


const routes: Routes = [  { path: 'mapa', component : MapaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
