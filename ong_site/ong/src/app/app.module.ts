import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EventoComponent } from './pages/evento/evento.component';
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';
import { ParceirosComponent } from './pages/participante/parceiros.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { OngComponent } from './pages/ong/ong.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventoComponent,
    QuemsomosComponent,
    ParceirosComponent,
    CadastroComponent,
    OngComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
