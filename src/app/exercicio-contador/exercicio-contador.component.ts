import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.scss']
})
export class ExercicioContadorComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() valorChange = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.valor = this.valor + 1;
    this.valorChange.emit(this.valor);
  }

  decrementar() {
    this.valor = this.valor - 1;
    this.valorChange.emit(this.valor);
  }

}
