import { AtivoFisico } from "./ativoFisico";
import { Ativos } from "./ativos";
import { LocalArmazenado } from "./localArmazenado";
import { Software } from "./software";
import { Users } from "./users";

export interface AtivoMiddle {
    ativos: Ativos | null,
    ativoFisico: AtivoFisico | null,
    software: Software | null,
    usuario: Users | null,
    local: LocalArmazenado | null
}
