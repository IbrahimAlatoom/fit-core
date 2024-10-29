/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from 'src/schemas/Employee.schema';
import { Model } from 'mongoose';
import { EmployeeSettings } from 'src/schemas/EmployeeSettings.schema';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(EmployeeSettings.name) private employeeSettingsModel: Model<EmployeeSettings>
  ) { }

  async create({ settings, ...createEmployeeDto }: CreateEmployeeDto) {
    if (settings) {
      const setting = new this.employeeSettingsModel(settings);
      const savedSetting = await setting.save();
      const employee = new this.employeeModel({
        ...createEmployeeDto,
        settings: savedSetting._id
      })
      return employee.save();
    }
    const employee = new this.employeeModel(createEmployeeDto);
    return await employee.save();
  }

  findAll() {
    return this.employeeModel.find().populate('settings');
  }

  findOne(id: number) {
    // this.employeeModel.findById(id)
    return this.employeeModel.findOne({ employeeId: id });
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto, { new: true });
  }

  remove(id: string) {
    return this.employeeModel.findByIdAndDelete(id);
  }
}
