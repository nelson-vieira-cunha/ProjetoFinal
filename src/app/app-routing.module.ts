import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { VendasmanterComponent } from './vendas/vendasmanter/vendasmanter.component';
import { VendasComponent } from './vendas/vendas.component';




const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/incluir',
    component: ClientemanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/alterar/:id',
    component: ClientemanterComponent,
    pathMatch: 'full'
  },

  {
    path: 'produto',
    component: ProdutoComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/incluir',
    component: ProdutomanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/alterar/:id',
    component: ProdutomanterComponent,
    pathMatch: 'full'
  },

  {
    path: 'vendas',
    component: VendasComponent,
    pathMatch: 'full'
  },
  {
    path: 'vendas/incluir',
    component: VendasmanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'vendas/incluir/:id',
    component: VendasmanterComponent,
    pathMatch: 'full'
  }

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
