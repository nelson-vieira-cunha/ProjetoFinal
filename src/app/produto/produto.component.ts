import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from './servico/produto.service';
import { Produto } from './servico/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  
  produto: Produto = new Produto();
  selecionado: Produto;

  listaProduto: Produto[] = [];

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.produtoService.pesquisar(this.produto.nome).subscribe(
      (retorno: Produto[]) => {
        this.listaProduto = retorno;
      }
    );
  }

  incluir() {
    this.router.navigate(['/produto/incluir']);
  }

  selecionar(valor) {
    this.selecionado = valor;
  }

  remover() {
    this.produtoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    )
  }

  alterar() {
    this.router.navigate(['/produto/alterar/' + this.selecionado.nome]);
  }
}
