import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BusinessAccount } from './class/businessAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.withdraw(10)
companyAccount.getLoan(100)
console.log(companyAccount)

const businessAccount: BusinessAccount = new BusinessAccount('empresa', 600)
businessAccount.deposit(100)
console.log(businessAccount)