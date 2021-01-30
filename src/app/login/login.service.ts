import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginCredenciais, LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  logar(credenciais: LoginCredenciais): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://accenture-java-desafio.herokuapp.com/login', credenciais);
  }
}
