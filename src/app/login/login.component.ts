import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginResponse } from './login.interfaces';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('usuarioInput') usuarioInput: ElementRef | undefined;
  @ViewChild('senhaInput') senhaInput: ElementRef | undefined;

  loginForm: FormGroup = this.formBuilder.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required],
  });

  estaCarregando: boolean = false;
  erroNoLogin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  onSubmit() {
    this.erroNoLogin = false;
    
    if (!this.loginForm.valid) {
      this.loginForm.controls.usuario.markAsTouched();
      this.loginForm.controls.senha.markAsTouched();

      if (this.loginForm.controls.usuario.invalid) {
        this.usuarioInput?.nativeElement.focus();
      }

      if (this.loginForm.controls.senha.invalid) {
        this.senhaInput?.nativeElement.focus();
      }

      return;
    }

    this.login();
  }

  exibeErro(nomeControle: string) {
    if (!this.loginForm.controls[nomeControle]) {
      return false;
    }

    return this.loginForm.controls[nomeControle].invalid && this.loginForm.controls[nomeControle].touched;
  }

  login() {
    this.estaCarregando = true;
    
    this.loginService.logar(this.loginForm.value)
      .subscribe(
        response => this.onSuccessLogin(response),
        error => this.onErrorLogin(error)
      );
  }

  onSuccessLogin(response: LoginResponse) {
    this.router.navigate(['home']);
  }

  onErrorLogin(error: any) {
    this.erroNoLogin = true;
    this.estaCarregando = false;
  }

}
