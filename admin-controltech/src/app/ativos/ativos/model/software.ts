import { Ativos } from "./ativos";
import { Licenca } from "./licenca";

export interface Software {
    id_software: number;
    versao: string;
    data_expira: Date;
    n_licenca: string;
    tipo_OS: string;
    produto: Ativos;
    licencas: Licenca[];
  }