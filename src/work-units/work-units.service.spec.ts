import { Test, TestingModule } from '@nestjs/testing';
import { WorkUnitsService } from './work-units.service';

describe('WorkUnitsService', () => {
  let service: WorkUnitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkUnitsService],
    }).compile();

    service = module.get<WorkUnitsService>(WorkUnitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
