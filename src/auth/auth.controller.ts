/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { LocalAuthGuard } from './local-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}
