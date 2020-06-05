export class Participante {
    id: number;
    nome: string;
    cpf: string;
    endereco: string;
    email: string;
    telefone: string;
    password: string;
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