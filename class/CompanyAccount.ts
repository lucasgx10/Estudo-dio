import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): number => {
    if (this.validateStatus()) {
      this.balance += loan
      return this.balance
    }
    throw new Error("Operação não permitida: status inválido.");
  }

  
}
