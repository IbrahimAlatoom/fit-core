import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpUserUseCase } from './usecases/signup-user.usecase';
import { SignUpUserUsecaseInput } from './usecases/inputs/signup-user-usecase.input';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private signUpUserUseCase: SignUpUserUseCase,
  ) {}

  @Post('register')
  async register(@Body() input: SignUpUserUsecaseInput) {
    return this.signUpUserUseCase.execute(input);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (user) return this.authService.login(user);
    return { error: 'Invalid credentials' };
  }
}
