import { Injectable, NotFoundException } from '@nestjs/common';
import { Account } from './account.entity';
import { AccountRepository } from './account.repository';
import { promises } from 'dns';

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}
  create(account: Account) {
    return this.accountRepository.createAccount(account);
  }

  update(id: string, account: Account) {
    const updatedAccount = this.accountRepository.findByIdAndUpdate(
      id,
      account,
    );
    if (!updatedAccount) throw new NotFoundException('Account Not Found');
    return updatedAccount;
  }
}
