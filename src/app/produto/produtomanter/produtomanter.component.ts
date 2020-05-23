import { Component, OnInit } from '@angular/core';
import { Produto } from '../servico/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../servico/produto.service';

@Component({
  selector: 'app-produtomanter',
  templateUrl: './produtomanter.component.html',
  styleUrls: ['./produtomanter.component.scss']
})
export class ProdutomanterComponent implements OnInit {
  
  nomeProduto: string = ''; 
  produto: Produto = new Produto();
  operacao: string = 'Incluir';

  constructor(
    private routeActivated: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.nomeProduto = this.routeActivated.snapshot.params.id;
    if(this.nomeProduto != null) {
      this.operacao = 'Alterar';
      this.produtoService.pesquisar(this.nomeProduto).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
        }
      );
    }
  }

  incluir() {
    this.produtoService.incluir(this.produto).subscribe(
      retorno => {
        alert(retorno['mensagem']);
        this.voltar();
      }
    );
  }

  voltar() {
    this.router.navigate(['/produto']);
  }

  alterar() {
    this.produtoService.alterar(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);
      }
    );
  }

}
