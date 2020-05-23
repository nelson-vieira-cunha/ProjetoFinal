import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendas } from './vendas';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(
    private http: HttpClient
  ) { }

  consultar(codigoCliente: string) {        
    return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/"+codigoCliente);
  }

  incluir(vendas: Vendas) {        
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir/", vendas);
  }

  alterar(vendas: Vendas) {        
    return this.http.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/alterarparcial/", vendas);
  }

  remover(vendas: Vendas) {      
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover/", vendas);    
  }
}
