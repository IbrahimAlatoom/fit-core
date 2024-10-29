/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateWorkUnitDto {
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    name: string;
}
