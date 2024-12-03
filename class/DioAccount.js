"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
class DioAccount {
    constructor(name, accountNumber) {
        this.balance = 0;
        this.status = true;
        this.getName = () => {
            return this.name;
        };
        this.deposit = (money) => {
            if (this.validateStatus()) {
                this.balance += money;
                return this.balance;
            }
            throw console.error("Operação não permitida: status inválido.");
        };
        this.withdraw = (withdraw) => {
            if (this.validateStatus()) {
                if (withdraw > this.balance) {
                    throw new Error("Dinheiro Insuficiente");
                }
                this.balance -= withdraw;
                return this.balance;
            }
            throw new Error("Operação não permitida: status inválido.");
        };
        this.getBalance = () => {
            console.log(this.balance);
        };
        this.validateStatus = () => {
            if (this.status) {
                return this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
}
exports.DioAccount = DioAccount;
