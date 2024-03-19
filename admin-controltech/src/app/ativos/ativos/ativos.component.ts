import { Component, OnInit } from '@angular/core';
import { Ativos } from '../model/ativos';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrl: './ativos.component.scss',
})
export class AtivosComponent implements OnInit {

  ativos: Ativos[] = [];

    displayedColumns = ['id','nome','qtdEstoque','valorItem','statusAtivo'];
  clickedRows = new Set<Ativos>();

  constructor(){
  }

  ngOnInit(): void {}

}
