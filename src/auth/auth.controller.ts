import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpUserUseCase } from './usecases/signup-user.usecase';
import { SignUpUserUsecaseInput } from './usecases/inputs/signup-user-usecase.input';
import { LoginUserUsecaseInput } from './usecases/inputs/login-user-usecase.input';
import { LoginUserUseCase } from './usecases/login-user.usecase';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private signUpUserUseCase: SignUpUserUseCase,
    private loginUserUseCase: LoginUserUseCase,
  ) {}

  @Post('register')
  async register(@Body() input: SignUpUserUsecaseInput) {
    return this.signUpUserUseCase.execute(input);
  }

  @Post('login')
  async login(@Body() input: LoginUserUsecaseInput) {
    return this.loginUserUseCase.execute(input);
  }
}
