import { Component, OnInit } from '@angular/core';
import { Participante } from './parceiros'
import axios from "axios";

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent implements OnInit {
  participante: Participante;
  participantes: Participante[] = [];

  constructor() {
    this.consultaParticipante();
   }

  ngOnInit(): void {
  }
  limpaECarrega(){
    this.participante = new Participante(-2, "string", "cpf", "endereco:", "email", "telefone", "password");
    this.consultaParticipante();
  }

  consultaParticipante(){
    axios
    .get("http://localhost:8080/ong/Participante")
    .then(response => {
      console.log(response);
      for (let t of response.data._embedded.Participante) {
        console.log(t);
        this.participantes.push(new Participante(t.id, t.nome, t.cpf, t.endereco, t.email, t.telefone, t.password));
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {});
  }gravar() {
      axios
        .post("http://localhost:8080/ong/Participante", {
          id: null,
          nome: this.participante.nome,
          cpf: this.participante.cpf,
          endereco: this.participante.endereco,
          email: this.participante.email,
          telefone: this.participante.telefone,
          password: this.participante.password,
        })
        .then(response => {
          this.limpaECarrega();
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    }
}
