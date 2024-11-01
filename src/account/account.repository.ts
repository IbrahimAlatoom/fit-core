import { InjectModel } from '@nestjs/mongoose';
import { AccountModel } from './account.model';
import { Model } from 'mongoose';
import { Account } from './account.entity';
import { AccountMapper } from './account.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(AccountModel.name) private accountModel: Model<AccountModel>,
  ) {}

  async createAccount(account: Account) {
    const raw = AccountMapper.toPersistence(account);
    await this.accountModel.create(raw);
    return account;
  }

  async findByIdAndUpdate(id: string, account: Account) {
    const raw = AccountMapper.toPersistence(account);
    await this.accountModel.findOneAndUpdate({ id: id }, raw);
    return account;
  }
}
