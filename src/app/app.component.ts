import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Seja bem-vindo!';

  exibirHeader = true;

  constructor() { }

  ngOnInit() {
    console.log('Passou por aqui');

    this.title = 'Outra coisa';

    setTimeout(() => {
      this.title = 'Seja bem-vindo!';
    }, 10000);
  }

  somar(numero1: number, numero2: number) {
    return numero1 + numero2;
  }

  texto() {
    return 'Vitor Farias';
  }

  eventoRecebido(event: any) {
    console.log('Recebi um evento no AppComponent', event);
  }

}
