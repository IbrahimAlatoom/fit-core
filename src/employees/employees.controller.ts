/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import mongoose from 'mongoose';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    console.log(createEmployeeDto);
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // const isValid = mongoose.Types.ObjectId.isValid(id);
    // if (!isValid) {
    //   throw new HttpException('User Not Found', 404);
    // }
    const employee = await this.employeesService.findOne(+id);
    if (!employee) {
      throw new HttpException('User Not Found', 404);
    }
    return employee
  }

  @Patch(':id')
  // @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Not Valid Id', 400);
    }
    const UpdatedEmployee = await this.employeesService.update(id, updateEmployeeDto);
    if (!UpdatedEmployee) {
      throw new HttpException('User Not Found', 404);
    }
    return UpdatedEmployee;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Not Valid Id', 400);
    }
    const removedEmployee = await this.employeesService.remove(id);
    if (!removedEmployee) {
      throw new HttpException('User Not Found', 404);
    }
    return removedEmployee;
  }
}
