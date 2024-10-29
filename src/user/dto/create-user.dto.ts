/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    username: string;  // Username must be a non-empty string

    @IsEmail()
    @IsNotEmpty()
    email: string;  // Email must be a valid non-empty email

    @IsString()
    @MinLength(6)
    password: string;  // Password must be a string and at least 6 characters long
}
