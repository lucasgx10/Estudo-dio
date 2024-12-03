"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class BusinessAccount extends DioAccount_1.DioAccount {
    constructor(name, accountNumber) {
        super(name, accountNumber);
        this.deposit = (money) => {
            if (this.validateStatus()) {
                let valorsomado = money + 10;
                this.balance += valorsomado;
                return this.balance;
            }
            throw console.error("Operação não permitida: status inválido.");
        };
    }
}
exports.BusinessAccount = BusinessAccount;
