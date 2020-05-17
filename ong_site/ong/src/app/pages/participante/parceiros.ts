export class Participante {
    id_participante: number;
    nome: string;
    cpf: string;
    endereco: string;
    email: string;
    telefone: string;
    password: string;
    constructor (id_participante: number, nome: string, cpf: string, endereco: string, email: string, telefone: string, password: string) {
        this.id_participante = id_participante
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.email = email
        this.telefone = telefone
        this.password = password
    }
}