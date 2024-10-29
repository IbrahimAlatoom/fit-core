/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from 'src/schemas/Employee.schema';
import { EmployeeSettings, EmployeeSettingsSchema } from 'src/schemas/EmployeeSettings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: EmployeeSettings.name, schema: EmployeeSettingsSchema }
    ])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule { }
