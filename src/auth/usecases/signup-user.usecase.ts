import { UseCase } from 'src/lib/usecase';
import { SignUpUserUsecaseInput } from './inputs/signup-user-usecase.input';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { AccountService } from 'src/account/account.service';
import { Account } from 'src/account/account.entity';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SignUpUserUseCase extends UseCase {
  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private authService: AuthService,
  ) {
    super();
  }

  async execute(input: SignUpUserUsecaseInput) {
    const existingUser = await this.userService.findByEmail(input.email);
    if (existingUser) {
      // TODO:
      return { message: 'User already exists' };
    }

    const newAccount = Account.create({ userId: '' });

    const newUser = User.create({
      email: input.email,
      password: input.password,
      accountsIds: [newAccount.id],
    });

    const user = await this.userService.create(newUser);
    newAccount.setUserId(user.id);
    await this.accountService.create(newAccount);

    return this.authService.login({ ...user, accountsIds: [] });
  }
}
