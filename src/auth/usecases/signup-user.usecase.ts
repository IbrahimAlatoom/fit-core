import { UseCase } from 'src/lib/usecase';
import { SignUpUserUsecaseInput } from './inputs/signup-user-usecase.input';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class SignUpUserUseCase extends UseCase {
  constructor(private authService: AuthService) {
    super();
  }

  execute(input: SignUpUserUsecaseInput) {
    // TODO: Create account for the user
    // TODO: Create the user
    // TODO: Link the user with the account

    // TODO: Register the user

    return this.authService.register({ ...input, accountsIds: [] });
  }
}
