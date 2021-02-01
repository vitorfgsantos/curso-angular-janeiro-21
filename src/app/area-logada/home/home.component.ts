import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { DashboardResponse } from './home.interfaces';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: Usuario | undefined;
  dashboard: DashboardResponse | undefined;

  inicio = '2021-01-01';
  fim = '2021-02-01';

  erro = false;
  estaCarregando = false;

  constructor(
    private authService: AuthService,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.usuario = this.authService.getUsuario();
    this.getDashboard();
  }

  getDashboard() {
    this.estaCarregando = true;
    this.erro = false;

    this.homeService.getDashboard(this.inicio, this.fim)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error),
      )
  }

  onSuccess(response: DashboardResponse) {
    this.dashboard = response;
    console.log(response);
  }

  onError(error: HttpErrorResponse) {
    this.erro = true;
  }

  getBordaCardCSS(saldo: number) {
    return {
      'border-success': saldo > 0,
      'border-danger': saldo < 0
    }
  }

  getTextSaldoCSS(saldo : number) {
    return {
      'text-success': saldo > 0,
      'text-danger': saldo < 0
    }
  }

}
