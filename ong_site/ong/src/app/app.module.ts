import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EventoComponent } from './pages/evento/evento.component';
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventoComponent,
    QuemsomosComponent,
    ParceirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
