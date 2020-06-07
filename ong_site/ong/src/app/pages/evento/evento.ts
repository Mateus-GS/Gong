export class Evento {
    id: number;
    Participante: number;
    Ong: number;
    nome: string;
    data_hora: string;
    descricao: string;
    local: string;
    quant_participante: number;
    espaco: number;
    constructor (id: number, Participante: number, Ong: number ,nome: string, data_hora: string, descricao: string, local: string, quant_participante: number, espaco: number) {
        this.id = id;
        this.Participante = Participante;
        this.Ong =Ong;
        this.nome = nome;
		this.data_hora = data_hora;
		this.descricao = descricao;
		this.local = local;
		this.quant_participante = quant_participante;
		this.espaco = espaco;
    }
}