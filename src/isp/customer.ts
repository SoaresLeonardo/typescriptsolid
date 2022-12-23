import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  firstName: string;
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
    this.firstName = firstName;
    this.cnpj = cnpj;
  }
}
