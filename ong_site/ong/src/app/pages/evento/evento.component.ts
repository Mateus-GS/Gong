import { Component, OnInit } from '@angular/core';
import { Evento } from './evento';
import axios from "axios";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  evento: Evento[] =[];

  constructor() { 
    this.consultaEvento();
  }

  ngOnInit(): void {
  }
  /*limpaECarrega(){
    this.evento = new Evento(-2, "Participante", "Ong", "nome", "data_hora", "descricao", "local" ,"quant_participante","espaco")
    this.consultaEvento();
  }*/
  consultaEvento(){
    axios
    .get("http://localhost:8080/ong/Eventos")
    .then(response => {
      console.log(response);
      for (let t of response.data._embedded.Eventos) {
        console.log(t);
        this.evento.push(new Evento(t.id, t.Participante, t.Ong, t.nome, t.data_hora, t.descricao, t.local, t.quant_participante, t.espaco));
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {});
  }
}
