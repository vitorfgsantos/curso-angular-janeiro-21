import { PlanoConta } from './plano-conta.interface';

export interface Lancamento {
  id: number;
  data: string;
  valor: number;
  conta: number;
  descricao: string;
  planoConta: PlanoConta;
  tipo: string;
}