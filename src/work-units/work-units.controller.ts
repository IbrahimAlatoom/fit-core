/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkUnitsService } from './work-units.service';
import { CreateWorkUnitDto } from './dto/create-work-unit.dto';
import { UpdateWorkUnitDto } from './dto/update-work-unit.dto';

@Controller('work-units')
export class WorkUnitsController {
  constructor(private readonly workUnitsService: WorkUnitsService) { }

  @Post()
  create(@Body() createWorkUnitDto: CreateWorkUnitDto) {
    return this.workUnitsService.create(createWorkUnitDto);
  }

  @Get()
  findAll() {
    return this.workUnitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workUnitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkUnitDto: UpdateWorkUnitDto) {
    return this.workUnitsService.update(+id, updateWorkUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workUnitsService.remove(+id);
  }
}
