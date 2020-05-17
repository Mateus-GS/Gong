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
  }
 


}
