import { Component, OnInit } from '@angular/core';
import { VendasService } from './servico/vendas.service';
import { ClienteService } from '../cliente/servico/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente/servico/cliente';
import { Vendas } from './servico/vendas';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  vendas: Vendas = new Vendas();
  selecionado: Vendas;
  listaVendasProduto: Vendas[] = [];
  listaCliente: Cliente[] = [];
  vendasIncluirComId: string;


  constructor(
    private router: Router,
    private vendasService: VendasService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );
    
    let codigoCliente = '';
    if(this.vendas.cliente != null) {
      codigoCliente = this.vendas.cliente.codigo;
    }
    this.vendasService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVendasProduto = <Vendas[]>data;
      }
    );
  }

  pesquisar() {
    let codigoCliente = '';
    if(this.vendas.cliente !== null) {
      codigoCliente = this.vendas.cliente.codigo;
    }

    this.vendasService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVendasProduto = <Vendas[]>data;
      }
    );
  }

  incluir() {
    if(this.vendasIncluirComId === undefined) {
      this.router.navigate(['/vendas/incluir']);
    } else {
      this.router.navigate(['/vendas/incluir/'+this.vendasIncluirComId]);
    }
  }

  alterar() {
    this.router.navigate(['/vendas/alterar/' + this.selecionado.codigo]);
  }

  remover() {
    this.vendasService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor) {
    this.selecionado = valor;
    this.vendasIncluirComId = this.selecionado.codigo;
  }

}


