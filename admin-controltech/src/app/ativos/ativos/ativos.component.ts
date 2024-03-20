import { Component, OnInit } from '@angular/core';
import { Ativos } from '../model/ativos';
import { NavBarServiceService } from '../../nav-bar/nav-bar-service.service';
import { DialogCrudComponent } from '../dialog-crud/dialog-crud.component';
import { MatDialog } from '@angular/material/dialog';
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

  ativos: Ativos[] = [  { 
    id: 1, 
    nome: 'Produto A', 
    qtdEstoque: 10, 
    valorItem: 50, 
    statusAtivo: 'Ativo', 
    data_aquisicao: new Date('2022-01-01'),
    descricao: 'Este é o Produto A' 
  },
  { 
    id: 2, 
    nome: 'Produto B', 
    qtdEstoque: 20, 
    valorItem: 30, 
    statusAtivo: 'Ativo', 
    data_aquisicao: new Date('2022-02-15'),
    descricao: 'Este é o Produto B' 
  },
  { 
    id: 3, 
    nome: 'Produto C', 
    qtdEstoque: 15, 
    valorItem: 70, 
    statusAtivo: 'Inativo', 
    data_aquisicao: new Date('2022-03-10'),
    descricao: 'Este é o Produto C' 
  },
  { 
    id: 4, 
    nome: 'Produto D', 
    qtdEstoque: 5, 
    valorItem: 100, 
    statusAtivo: 'Ativo', 
    data_aquisicao: new Date('2022-04-20'),
    descricao: 'Este é o Produto D' 
  },
  { 
    id: 5, 
    nome: 'Produto E', 
    qtdEstoque: 25, 
    valorItem: 40, 
    statusAtivo: 'Inativo', 
    data_aquisicao: new Date('2022-05-05'),
    descricao: 'Este é o Produto E' 
  }];

  displayedColumns = ['id','nome','qtdEstoque','valorItem','statusAtivo'];
  clickedRows = new Set<Ativos>();
  isNavOpen: boolean = false;
  constructor(private navBarService: NavBarServiceService, public dialog: MatDialog) {
    this.navBarService.isNavOpen$.subscribe(isOpen => {
      this.isNavOpen = isOpen;
    });
  }

  
  ngOnInit(): void {}

}
