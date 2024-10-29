/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {

    @IsEmail()
    @IsNotEmpty()
    @IsOptional()
    email: string;

}
