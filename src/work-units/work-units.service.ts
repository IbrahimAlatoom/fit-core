/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateWorkUnitDto } from './dto/create-work-unit.dto';
import { UpdateWorkUnitDto } from './dto/update-work-unit.dto';
import { InjectModel } from '@nestjs/mongoose';
import { WorkUnit } from 'src/schemas/WorkUnit.schema';
import { Model } from 'mongoose';

@Injectable()
export class WorkUnitsService {
  constructor(@InjectModel(WorkUnit.name) private workUnitModel: Model<WorkUnit>) { }

  create(createWorkUnitDto: CreateWorkUnitDto) {
    const workUnit = new this.workUnitModel(createWorkUnitDto);
    return workUnit.save();
  }

  findAll() {
    return `This action returns all workUnits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workUnit`;
  }

  update(id: number, updateWorkUnitDto: UpdateWorkUnitDto) {
    return `This action updates a #${id} workUnit`;
  }

  remove(id: number) {
    return `This action removes a #${id} workUnit`;
  }
}
