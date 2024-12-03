"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class CompanyAccount extends DioAccount_1.DioAccount {
    constructor(name, accountNumber) {
        super(name, accountNumber);
        this.getLoan = (loan) => {
            if (this.validateStatus()) {
                this.balance += loan;
                return this.balance;
            }
            throw new Error("Operação não permitida: status inválido.");
        };
    }
}
exports.CompanyAccount = CompanyAccount;
