import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { AreaLogadaComponent } from './area-logada.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { PlanosContaComponent } from './planos-conta/planos-conta.component';


@NgModule({
  declarations: [
    AreaLogadaComponent,
    PlanosContaComponent,
    LancamentosComponent,
  ],
  imports: [
    CommonModule,
    AreaLogadaRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class AreaLogadaModule { }
