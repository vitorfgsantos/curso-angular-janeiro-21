import { Injectable } from '@angular/core';

import { LoginCredenciais } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar(credenciais: LoginCredenciais) {
    console.log('LoginService', credenciais);
  }
}
