/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Length, ValidateNested } from "class-validator";

export class CreateEmployeeSettingDto {

    @IsBoolean()
    @IsOptional()
    reciveNotifications?: boolean;

    @IsBoolean()
    @IsOptional()
    reciveEmails?: boolean;

    @IsBoolean()
    @IsOptional()
    reciveSms?: boolean;

}

export class CreateEmployeeDto {
    @IsNotEmpty()
    employeeId: string;

    @IsNotEmpty()
    @IsString()
    @Length(3)
    firstname: string;

    @IsNotEmpty()
    @IsString()
    @Length(3)
    lastname: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateEmployeeSettingDto)
    settings?: CreateEmployeeSettingDto;
    // phoneNumber: string;

    // jobTitle: string;

    // hireDate: Date;

    // workUnitId: string;

    // managerId: string;

    // departmentId: string;

    // executiveId: string;
}
