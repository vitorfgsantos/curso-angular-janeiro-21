import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginCredenciais } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  logar(credenciais: LoginCredenciais) {
    return this.http.post('https://accenture-java-desafio.herokuapp.com/login', credenciais);
  }
}
