import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {

  valorMonetario = 3000;
  data = new Date();

  filme = {
    titulo: 'Matrix Reloaded',
    avaliacao: 4.573930302,
    precoAluguel: 12.99,
    dataLancamento: new Date(),
  }
  

}
