import { Lancamento } from 'src/app/shared/interfaces/lancamento.interface';

export interface DashboardResponse {
  contaBanco: Conta;
  contaCredito: Conta;
}

interface Conta {
  saldo: number;
  id: number;
  lancamentos: Lancamento[];
}