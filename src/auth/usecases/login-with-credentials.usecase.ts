import { UserService } from 'src/user/user.service';
import { LoginUserUsecaseInput } from './inputs/login-user-usecase.input';
import * as bcrypt from 'bcryptjs';
import { InvalidCredentialsException } from '../exceptions/InvalidCredentials.exception';
import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/lib/usecase';

@Injectable()
export class LoginWithCredentialsUseCase extends UseCase {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
    super();
  }

  async execute(input: LoginUserUsecaseInput) {
    const user = await this.userService.findByEmail(input.email);
    if (!user) {
      return new InvalidCredentialsException();
    }

    const isPasswordValid = await bcrypt.compare(input.password, user.password);
    if (!isPasswordValid) {
      return new InvalidCredentialsException();
    }

    return this.authService.login(user);
  }
}
