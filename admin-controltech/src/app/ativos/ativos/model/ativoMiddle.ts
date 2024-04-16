import { AtivoFisico } from "./ativoFisico";
import { Ativos } from "./ativos";
import { Software } from "./software";

export interface AtivoMiddle {
    ativos: Ativos | null,
    ativoFisico: AtivoFisico | null,
    software: Software | null
}
