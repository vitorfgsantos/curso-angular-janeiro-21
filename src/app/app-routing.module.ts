import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LoginComponent } from './login/login.component';
import { PlanosContaComponent } from './planos-conta/planos-conta.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'cadastro',
  component: CadastroComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'planos-conta',
  component: PlanosContaComponent
}, {
  path: 'lancamentos',
  component: LancamentosComponent
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '**',
  component: Erro404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
