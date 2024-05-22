import { Component } from '@angular/core';
import { Licenca } from '../ativos/ativos/model/licenca';
import { AtivosService } from '../services/ativos.service';

@Component({
  selector: 'app-licencas',
  templateUrl: './licencas.component.html',
  styleUrl: './licencas.component.scss'
})
export class LicencasComponent {
  softwareName: string = '';
  licencas: Licenca[] = [];

  constructor(private ativoService: AtivosService){ }

  loadLicencas(): void{
    this.ativoService.getSoftwareByAtivoName(this.softwareName).subscribe(
      (software) => {
        this.ativoService.getSoftwareLicenses(software.id_software).subscribe(
          (licencas: Licenca[]) => {
            this.licencas = licencas;
          },
          (error) => {
            console.log("Erro ao carregar licencas", error);
          }
        );
      },
      (error) => {
        console.log("Erro ao buscar software", error)
      }
    )
  }
}
