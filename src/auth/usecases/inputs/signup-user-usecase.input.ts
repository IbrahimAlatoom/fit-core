import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignUpUserUsecaseInput {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
