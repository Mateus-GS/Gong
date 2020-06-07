export class Participante {
    id: number;
    nome: string = "participantes.nome";
    cpf: string = "participantes.cpf";
    endereco: string = "participantes.endereco";
    email: string = "participantes.email";
    telefone: string = "participantes.telefone";
    password: string = "participantes.password";
    constructor (id: number, nome: string, cpf: string, endereco: string, email: string, telefone: string, password: string) {
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.email = email
        this.telefone = telefone
        this.password = password
    }
}