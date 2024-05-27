import { SubLocal } from "./sublocal";

export interface LocalArmazenado {
    id: number;
    nomelocal: string;
    endereco: string;
    descricao: string;
    subLocal: SubLocal | null;
  }