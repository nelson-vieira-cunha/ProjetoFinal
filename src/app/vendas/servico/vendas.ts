import { Cliente } from './../../cliente/servico/cliente';
import { VendasProduto } from './vendasProduto';

export class Vendas {
    codigo: string;
    dataVenda: Date;
    cliente: Cliente;
    listaVendasProduto: VendasProduto[] = [];
}