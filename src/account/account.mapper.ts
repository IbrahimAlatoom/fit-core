import { Account } from './account.entity';
import { AccountModel } from './account.model';

export class AccountMapper {
  static toDto(account: Account) {
    return {
      id: account.id,
      role: account.role,
    };
  }

  static toEntity(accountModel: AccountModel) {
    const account = Account.create({
      id: accountModel.id,
      userId: accountModel.id,
      role: accountModel.role,
    });
    return account;
  }

  static toPersistence(account: Account) {
    return {
      id: account.id,
      userId: account.userId,
      role: account.role,
    };
  }
}
