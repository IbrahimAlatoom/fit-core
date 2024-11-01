import { UseCase } from 'src/lib/usecase';
import { SignUpUserUsecaseInput } from './inputs/signup-user-usecase.input';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { AccountService } from 'src/account/account.service';
import { Account } from 'src/account/account.entity';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { UserAlreadyExistsException } from '../exceptions/UserAlreadyExists.exception';
import { OrganizationService } from 'src/organization/organization.service';
import { Organization } from 'src/organization/organization.entity';

@Injectable()
export class SignUpUserUseCase extends UseCase {
  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private authService: AuthService,
    private organizationService: OrganizationService,
  ) {
    super();
  }

  async execute(input: SignUpUserUsecaseInput) {
    const existingUser = await this.userService.findByEmail(input.email);
    if (existingUser) {
      throw new UserAlreadyExistsException();
    }

    const newAccount = Account.create({ userId: '' });

    const newUser = User.create({
      email: input.email,
      password: input.password,
      accountsIds: [newAccount.id],
    });

    const newOrganization = Organization.create({
      name: input.organizationName,
      phone: input.organizationPhone,
      accountId: newAccount.id,
    });

    console.log(newOrganization);

    const organization = await this.organizationService.create(newOrganization);

    const user = await this.userService.create(newUser);
    newAccount.setUserId(user.id);
    newAccount.setOrganizationId(organization.id);
    await this.accountService.create(newAccount);

    return this.authService.login({ ...user, accountsIds: [] });
  }
}
