/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {

    @IsString()
    @IsNotEmpty()
    username: string;  // Username (could also be email, depending on the design)

    @IsString()
    @IsNotEmpty()
    password: string;  // Password
}
