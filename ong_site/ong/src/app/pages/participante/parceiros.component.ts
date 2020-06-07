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
  listar(){
    this.participante = new Participante(-2, "string", "cpf", "endereco:", "email", "telefone", "password");
  }
  novo() {
    this.participante.id = -1;
    this.participante.nome = "";
    this.participante.cpf = "";
    this.participante.endereco = "";
    this.participante.email = "";
    this.participante.telefone = "";
    this.participante.password = "";
  }

  consultaParticipante(){
    axios
    .get("http://localhost:8080/ong/Participante/")
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
  }
  gravar() {
    if (this.participante.id == -1) {
      axios
        .post("http://localhost:8080/ong/Participante/", {
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
        window.location.reload();
    } else {
      axios
        .put("http://localhost:8080/ong/Participante/" + this.participante.id, {
          id: this.participante.id,
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
        window.location.reload();
    }
  }  editar(t: Participante) {
    this.participante.id = t.id;
    this.participante.nome = t.nome;
    this.participante.cpf = t.cpf;
    this.participante.endereco = t.endereco;
    this.participante.email  = t.email;
    this.participante.telefone  = t.telefone;
    this.participante.password  = t.password;
  } 
   excluir(index: number) {
    axios
      .delete("http://localhost:8080/ong/Participante/" + index)
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