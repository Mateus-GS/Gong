import { Component, OnInit } from '@angular/core';
import { Evento } from './evento'
import axios from "axios";


@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  evento: Evento[] = [];
  constructor() { 
    this.consultaEvento();
  }

  ngOnInit(): void {
  }

  consultaEvento() {
    axios
    .get("http://localhost:8000/loja/categorias")
    .then(response => {
    console.log(response);
    for (let t of response.data._embedded.categorias) {
    console.log(t);
    this.evento.push(new Evento());
    }
    })
    .catch(error => {
    console.log(error);
    })
    .finally(() => {});
    }

}
