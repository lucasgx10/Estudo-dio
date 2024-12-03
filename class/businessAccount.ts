import { DioAccount } from "./DioAccount"

export class BusinessAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (money: number): number => {
    if(this.validateStatus()){
      let valorsomado = money + 10
      this.balance += valorsomado;
      return this.balance;
    }
    throw console.error("Operação não permitida: status inválido.");
  }

  
}
