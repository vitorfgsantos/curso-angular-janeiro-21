import { Component, ViewEncapsulation } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ExercicioDiretivasComponent {

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  IMAGEM_PREFIXO = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';
  
  deveExibir = true;

  frutas = [
    'Abacaxi',
    'Laranja',
    'Melancia',
  ];

  classeCSS = 'verde';

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }

  trocarParaVermelho() {
    this.classeCSS = 'vermelho';
  }

  trocarParaVerde() {
    this.classeCSS = 'verde';
  }

  getClasseCSS() {
    return {
      'verde': true,
      'fonte-grande': this.deveExibir
    };
  }

}
