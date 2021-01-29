import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  deveExibir = true;

  frutas = [
    'Abacaxi',
    'Laranja',
    'Melancia',
  ]

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }

}
