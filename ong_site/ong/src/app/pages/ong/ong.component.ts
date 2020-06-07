import { Component, OnInit } from '@angular/core';
import { Ong} from './ong'
import axios from "axios";

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {
  ong: Ong;
  ongs: Ong[] =[];

  constructor() { 
    this.consultaOng();
  }

  ngOnInit(): void {
  }
  limpaECarrega(){
    this.ong = new Ong(-2, "string","cnpj","cpf" ,"endereco:", "email", "telefone", "password");
    this.consultaOng();
  }
  listar(){
    this.ong = new Ong(-2, "string", "cnpj","cpf" ,"endereco:", "email", "telefone", "password");
  }
  novo() {
    this.ong.id = -1;
    this.ong.nome = "";
    this.ong.cnpj = "";
    this.ong.cpf = "";
    this.ong.endereco = "";
    this.ong.email = "";
    this.ong.telefone = "";
    this.ong.password = "";
  }
  consultaOng(){
    axios
    .get("http://localhost:8080/ong/Ong/")
    .then(response => {
      console.log(response);
      for (let o of response.data._embedded.Ong) {
        console.log(o);
        this.ongs.push(new Ong(o.id, o.nome, o.cnpj ,o.cpf, o.endereco, o.email, o.telefone, o.password));
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {});
  }
  gravar() {
    if (this.ong.id == -1) {
      axios
        .post("http://localhost:8080/ong/Ong/", {
          id: null,
          nome: this.ong.nome,
          cnpj: this.ong.cnpj,
          cpf: this.ong.cpf,
          endereco: this.ong.endereco,
          email: this.ong.email,
          telefone: this.ong.telefone,
          password: this.ong.password,
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
        .put("http://localhost:8080/ong/Ong/" + this.ong.id, {
          id: this.ong.id,
          nome: this.ong.nome,
          cnpj: this.ong.cnpj,
          cpf: this.ong.cpf,
          endereco: this.ong.endereco,
          email: this.ong.email,
          telefone: this.ong.telefone,
          password: this.ong.password,
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
  }  editar(o: Ong) {
    this.ong.id = o.id;
    this.ong.nome = o.nome;
    this.ong.cnpj = o.cnpj;
    this.ong.cpf = o.cpf;
    this.ong.endereco = o.endereco;
    this.ong.email  = o.email;
    this.ong.telefone  = o.telefone;
    this.ong.password  = o.password;
  } 
   excluir(index: number) {
    axios
      .delete("http://localhost:8080/ong/Ong/" + index)
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
