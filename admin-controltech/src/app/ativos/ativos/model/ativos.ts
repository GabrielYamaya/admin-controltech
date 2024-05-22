import { LocalArmazenado } from "./localArmazenado";

export interface Ativos {
    id: number | null;
    nome: string;
    qntEstoque: number;
    valorItem: number;
    data_aquisicao: Date | any;
    statusAtivo: string;
    descricao: string;
    localArmazenado: LocalArmazenado | null;
}
