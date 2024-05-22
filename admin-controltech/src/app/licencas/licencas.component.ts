import { Component, OnInit } from '@angular/core';
import { Licenca } from '../ativos/ativos/model/licenca';
import { AtivosService } from '../services/ativos.service';
import { FormControl } from '@angular/forms';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Software } from '../ativos/ativos/model/software';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-licencas',
  templateUrl: './licencas.component.html',
  styleUrl: './licencas.component.scss'
})
export class LicencasComponent implements OnInit {
  softwareName: string = '';
  softwareControl = new FormControl();
  filteredSoftwares: Observable<Software[]> | undefined;

  licencas: Licenca[] = [];

  constructor(private ativoService: AtivosService){ }

  ngOnInit(): void {
    this.filteredSoftwares = this.softwareControl.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): Observable<Software[]> {
    return this.ativoService.searchSoftwareByName(value);
  }

  displayFn(software?: Software): string | undefined {
    return software ? software.id_produto.nome : undefined;
  }

  loadLicencas(software: Software): void {
    this.ativoService.getSoftwareLicenses(software.id_software).subscribe(
      (licensas: Licenca[]) => {
        this.licencas = licensas;
      },
      (error) => {
        console.error('Erro ao carregar as licenças', error);
      }
    );
  }
}
