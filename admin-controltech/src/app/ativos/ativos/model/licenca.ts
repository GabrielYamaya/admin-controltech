import { Software } from "./software";
import { Users } from "./users";

export interface Licenca {
    id_licenca: number;
    chave: string;
    observacoes: string;
    software: Software | null;
    usuario: Users | null;
}