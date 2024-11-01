import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpUserUseCase } from './usecases/signup-user.usecase';
import { SignUpUserUsecaseInput } from './usecases/inputs/signup-user-usecase.input';
import { LoginUserUsecaseInput } from './usecases/inputs/login-user-usecase.input';
import { LoginWithCredentialsUseCase } from './usecases/login-with-credentials.usecase';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private signUpUserUseCase: SignUpUserUseCase,
    private loginWithCredentialsUseCase: LoginWithCredentialsUseCase,
  ) {}

  @Post('register')
  async register(@Body() input: SignUpUserUsecaseInput) {
    return this.signUpUserUseCase.execute(input);
  }

  @Post('login')
  async login(@Body() input: LoginUserUsecaseInput) {
    return this.loginWithCredentialsUseCase.execute(input);
  }
}
