import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { EventoComponent} from './pages/evento/evento.component';
import { QuemsomosComponent} from './pages/quemsomos/quemsomos.component';
import { ParceirosComponent} from './pages/participante/parceiros.component';
import { CadastroComponent} from './pages/cadastro/cadastro.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'evento', component: EventoComponent},
  {path: 'quemsomos', component: QuemsomosComponent},
  {path: 'parceiros', component: ParceirosComponent},
  {path: 'cadastro', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
