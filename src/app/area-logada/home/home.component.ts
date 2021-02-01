import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(
    private authService: AuthService,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.usuario = this.authService.getUsuario();
    this.getDashboard();
  }

  getDashboard() {
    const inicio = '2021-01-01';
    const fim = '2021-02-01';

    this.homeService.getDashboard(inicio, fim)
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
    console.log('Deu erro', error);
  }

}
