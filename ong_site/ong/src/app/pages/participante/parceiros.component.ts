import { Component, OnInit } from '@angular/core';
import { Participante } from './parceiros'
import axios from "axios";

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent implements OnInit {
  Participante: Participante[] = [];

  constructor() {
    this.consultaParticipante();
   }

  ngOnInit(): void {
  }
  limpaECarrega(){
    this.Participante = new Participante('id_participante', "string", "cpf", "endereco:", "email", "telefone", "password");
    this.consultaParticipante();
  }

  consultaParticipante(){
    axios
    .get("http://localhost:8080/ong/Participante")
    .then(response => {
      console.log(response);
      for (let t of response.data._embedded.parceiros) {
        console.log(t);
        this.Participante.push(new Participante(t.id_participante, t.nome, t.cpf, t.endereco, t.email, t.telefone, t.password));
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {});
  }gravar() {
      axios
        .post("http://localhost:8080/ong/Participante", {
          id_participante: null,
          nome: this.Participante,
          cpf: this.Participante,
          endereco: this.Participante,
          email: this.Participante,
          telefone: this.Participante,
          password: this.Participante,
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
