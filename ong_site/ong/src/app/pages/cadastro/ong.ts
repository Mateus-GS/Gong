export class Ong {
    id: number;
    nome: String;
    cnpj: String;
    cpf: String;
    endereco: String;
    email: String;
    telefone: String;
    password: String;
    constructor(id: number, nome: String, cnpj: String, cpf: String, endereco: String, email: String, telefone: String, password: String){
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.cpf = cpf;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.password = password;
    }
}