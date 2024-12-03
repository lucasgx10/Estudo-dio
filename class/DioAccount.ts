export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (money: number): number => {
    if(this.validateStatus()){
      this.balance += money;
      return this.balance;
    }
    throw console.error("Operação não permitida: status inválido.");
  }

  withdraw = (withdraw: number): number => {
    if (this.validateStatus()) {
      if (withdraw > this.balance) {
        throw new Error("Dinheiro Insuficiente");
      }
      this.balance -= withdraw;
      return this.balance;
    }
    throw new Error("Operação não permitida: status inválido.");
  }
  

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
