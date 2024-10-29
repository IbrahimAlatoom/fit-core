/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';  // Import ConfigModule and ConfigService
import { AuthController } from './auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),  // Ensure ConfigModule is registered
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => ({
        secret: 'secret',
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule { }
