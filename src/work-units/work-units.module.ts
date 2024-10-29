/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { WorkUnitsService } from './work-units.service';
import { WorkUnitsController } from './work-units.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkUnit, WorkUnitSchema } from 'src/schemas/WorkUnit.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: WorkUnit.name, schema: WorkUnitSchema }])],
  controllers: [WorkUnitsController],
  providers: [WorkUnitsService],
})
export class WorkUnitsModule { }
