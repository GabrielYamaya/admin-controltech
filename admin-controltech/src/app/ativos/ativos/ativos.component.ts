import { Component, OnInit } from '@angular/core';
import { Ativos } from './model/ativos';
import { NavBarServiceService } from '../../nav-bar/nav-bar-service.service';
import { DialogCrudComponent } from '../dialog-crud/dialog-crud.component';
import { MatDialog } from '@angular/material/dialog';
import { AtivosService } from '../../services/ativos.service';
@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrl: './ativos.component.scss',
})
export class AtivosComponent implements OnInit {

  openProductDialog(): void {
    console.log('Abrindo o diálogo...');
    const dialogRef = this.dialog.open(DialogCrudComponent, {
      width: '800px',
      data: {
        title: 'Cadastro de Ativo'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Diálogo fechado com resultado:', result);
    });
  }

  ativos: Ativos[] = [];
  formData = this.ativos;

  displayedColumns = ['id','nome','qntEstoque','valorItem','statusAtivo'];
  clickedRows = new Set<Ativos>();
  isNavOpen: boolean = false;
  constructor(private navBarService: NavBarServiceService, public dialog: MatDialog, private AtivosService: AtivosService) {
    this.navBarService.isNavOpen$.subscribe(isOpen => {
      this.isNavOpen = isOpen;
    });

  }

  
  ngOnInit(): void {
    this.getAtivos();
  }
  getAtivos(): void {
    this.AtivosService.getAtivos().subscribe(ativos => {
      this.ativos = ativos;
      console.log(this.ativos);
    })
  }

}
