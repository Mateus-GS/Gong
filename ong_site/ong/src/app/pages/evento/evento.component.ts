import { Component, OnInit } from '@angular/core';
import { Evento } from './evento';
import axios from "axios";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  evento: Evento;
  eventos: Evento[] = [];

  constructor() { 
    this.consultaEvento();
  }

  ngOnInit(): void {
  }
  limpaECarrega(){
    this.evento = new Evento(-2,-1, -1, "ong", "nome", "descricao", "local" ,100, 100 )
    this.consultaEvento();
  }
  listar(){
    this.evento = new Evento(-2, -1, -1, "ong", "nome", "descricao", "local" ,100, 100 );
  }
  novo(){
    this.evento.id = -2;
    this.evento.Participante = 9;
    this.evento.Ong = 1;
    this.evento.nome = "";
    this.evento.data_hora = "";
    this.evento.descricao = "";
    this.evento.local = "";
    this.evento.quant_participante = 100;
    this.evento.espaco = 100;
  }
  consultaEvento(){
    axios
    .get("http://localhost:8080/ong/Eventos/")
    .then(response => {
      console.log(response);
      for (let e of response.data._embedded.Eventos) {
        console.log(e);
        this.eventos.push(new Evento(e.id, e.Participante, e.Ong, e.nome, e.data_hora, e.descricao, e.local, e.quant_participante, e.espaco));
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {});
  }
  gravar() {
    if (this.evento.id == -2) {
      axios
        .post("http://localhost:8080/ong/Eventos/", {
          id: null,
          Participante : this.evento.Participante, 
          Ong : this.evento.Ong,
          nome: this.evento.nome,
          data_hora : this.evento.data_hora,
          local: this.evento.local,
          quant_participante: this.evento.quant_participante,
          espaco: this.evento.espaco,
        })
        .then(response => {
          this.limpaECarrega();
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
        window.location.reload();
    } else {
      axios
        .put("http://localhost:8080/ong/Eventos/" + this.evento.id, {
          id: this.evento.id,
          participante: this.evento.Participante,
          ong: this.evento.Ong,
          nome: this.evento.nome,
          data_hora : this.evento.data_hora,
          local: this.evento.local,
          quant_participante: this.evento.quant_participante,
          espaco: this.evento.espaco,
        })
        .then(response => {
          this.limpaECarrega();
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
        window.location.reload();
    }
  }  editar(e: Evento) {

    this.evento.id = e.id;
    this.evento.Participante = e.Participante;
    this.evento.Ong = e.Ong;
    this.evento.nome = e.nome;
    this.evento.data_hora= e.data_hora;
    this.evento.descricao = e.descricao;
    this.evento.local = e.local;
    this.evento.quant_participante = e.quant_participante;
    this.evento.espaco = e.espaco;
  } 
   excluir(index: number) {
    axios
      .delete("http://localhost:8080/ong/Eventos/" + index)
      .then(response => {
        this.limpaECarrega();
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
      window.location.reload();
  }
}
