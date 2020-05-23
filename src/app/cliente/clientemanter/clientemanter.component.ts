import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../servico/cliente.service';
import { Cliente } from '../servico/cliente';

@Component({
  selector: 'app-clientemanter',
  templateUrl: './clientemanter.component.html',
  styleUrls: ['./clientemanter.component.scss']
})
export class ClientemanterComponent implements OnInit {

  nomeCliente: string = '';
  cliente: Cliente = new Cliente();
  operacao: string = 'Incluir';

  constructor(
    private routeActivated: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nomeCliente = this.routeActivated.snapshot.params.id;
    if(this.nomeCliente != null) {
      this.operacao = 'Alterar';
      this.clienteService.consultar(this.nomeCliente).subscribe(
        data => {
          this.cliente = (<Cliente[]>data)[0];
        }
      );
    }

  }

  incluir() {
    this.clienteService.incluir(this.cliente).subscribe(
      retorno => {
        alert(retorno['mensagem']);
        this.voltar();
      }
    );
  }  

  voltar() {
    this.router.navigate(['/cliente']);
  }

  alterar() {
    this.clienteService.alterar(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/cliente'])
      }
    );
  }
  
}

