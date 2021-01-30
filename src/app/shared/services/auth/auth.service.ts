import { Injectable } from '@angular/core';

import { Usuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: Usuario | undefined;
  private token: string | undefined;

  constructor() { }

  setUsuario(usuario: Usuario) {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getUsuario() {
    if (this.usuario) {
      return this.usuario;
    }

    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
      return this.usuario;
    }

    return undefined;
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const tokenGuardado = localStorage.getItem('token');
    if (tokenGuardado) {
      this.token = tokenGuardado;
      return this.token;
    }

    return undefined;
  }

  logout() {
    delete this.usuario;
    delete this.token;
    localStorage.clear();
  }

  estaLogado() {
    if (this.getUsuario() && this.getToken()) {
      return true;
    }

    return false;
  }


}
