import { Component, OnInit } from '@angular/core';
import { Licenca } from '../ativos/ativos/model/licenca';
import { AtivosService } from '../services/ativos.service';
import { FormControl } from '@angular/forms';
import { map, startWith, switchMap, filter } from 'rxjs/operators';
import { Software } from '../ativos/ativos/model/software';
import { Observable } from 'rxjs';
import { DialogCrudComponent } from '../ativos/dialog-crud/dialog-crud.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogCrudLicenceComponent } from './dialog-crud-licence/dialog-crud-licence.component';

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

  constructor(private ativoService: AtivosService, public dialog: MatDialog){ }

  openLicencaDialog(): void {
    console.log('Abrindo o diálogo...');
    const dialogRef = this.dialog.open(DialogCrudLicenceComponent, {
      width: '800px',
      data: {
        title: 'Cadastro de Ativo'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Diálogo fechado com resultado:', result);
    });
  }

  ngOnInit(): void {
    this.filteredSoftwares = this.softwareControl.valueChanges.pipe(
      filter(value => typeof value === 'string' && value.length > 0), // Adiciona filtro para evitar requisição vazia
      startWith(''),
      switchMap(value => this._filter(value || 'N'))
    );
  }

  private _filter(value: string): Observable<Software[]> {
    return this.ativoService.searchSoftwareByName(value);
  }

  loadLicencas(software: Software): void {
    if (software && software.id_software) {
      this.ativoService.getSoftwareLicenses(software.id_software).subscribe(
        (licenses: Licenca[]) => {
          this.licencas = licenses;
        },
        (error) => {
          console.error('Erro ao carregar as licenças', error);
        }
      );
    }
  }

  displayFn(software: Software): string {
    console.log ("Olha -> " + software.produto.nome)
    return software && software.produto && software.produto.nome ? software.produto.nome : '';
  }
}


