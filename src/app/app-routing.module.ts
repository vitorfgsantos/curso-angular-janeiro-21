import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { HomeComponent } from './area-logada/home/home.component';
import { LancamentosComponent } from './area-logada/lancamentos/lancamentos.component';
import { PlanosContaComponent } from './area-logada/planos-conta/planos-conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';
import { LoginComponent } from './login/login.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [{
  path: '',
  component: AreaLogadaComponent,
  canActivate: [EstaLogadoGuard],
  children: [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'planos-conta',
    component: PlanosContaComponent
  }, {
    path: 'lancamentos',
    component: LancamentosComponent
  }]
}, {
  path: 'cadastro',
  component: CadastroComponent,
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: '**',
  component: Erro404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
