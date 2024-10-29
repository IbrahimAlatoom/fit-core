import { Test, TestingModule } from '@nestjs/testing';
import { WorkUnitsController } from './work-units.controller';
import { WorkUnitsService } from './work-units.service';

describe('WorkUnitsController', () => {
  let controller: WorkUnitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkUnitsController],
      providers: [WorkUnitsService],
    }).compile();

    controller = module.get<WorkUnitsController>(WorkUnitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
