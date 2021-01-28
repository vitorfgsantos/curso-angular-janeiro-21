import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seja bem-vindo!';

  constructor() {
    console.log('Passou por aqui');
    
    this.title = 'Outra coisa';

    setTimeout(() => {
      this.title = 'Seja bem-vindo!';
    }, 3000);
  }

  somar(numero1: number, numero2: number) {
    return numero1 + numero2;
  }

  texto() {
    return 'Vitor Farias';
  }

}
