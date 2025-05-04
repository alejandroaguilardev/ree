import { Test, TestingModule } from '@nestjs/testing';
import { ExternalBalanceApi } from '../../../src/balance/infraestructura/external-balance.api';
import { MongoEnergyBalanceRepository } from '../../../src/balance/infraestructura/repositories/mongo-energy-balance.repository';
import { BalanceScheduleService } from '../../../src/balance/services/balance-schedule.service';
import { BalanceService } from '../../../src/balance/services/balance.service';

describe('BalanceScheduleService', () => {
  let service: BalanceScheduleService;
  let externalBalanceApiMock: Partial<ExternalBalanceApi>;
  let balanceRepositoryMock: Partial<MongoEnergyBalanceRepository>;
  let balanceServiceMock: Partial<BalanceService>;

  beforeEach(async () => {
    externalBalanceApiMock = {
      getBalanceByDateRange: jest.fn().mockResolvedValue([]),
    };

    balanceRepositoryMock = {
      upsert: jest.fn().mockResolvedValue(true),
    };

    balanceServiceMock = {
      findByDateRange: jest.fn(),
      upsert: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BalanceScheduleService,
        { provide: ExternalBalanceApi, useValue: externalBalanceApiMock },
        {
          provide: MongoEnergyBalanceRepository,
          useValue: balanceRepositoryMock,
        },
        { provide: BalanceService, useValue: balanceServiceMock },
      ],
    }).compile();

    service = module.get<BalanceScheduleService>(BalanceScheduleService);
  });

  it('should call repository.upsert with correct dates when fetchBalanceData is called', async () => {
    const spyUpsert = jest.spyOn(balanceServiceMock, 'upsert');

    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - 1);
    await service.fetchBalanceData();

    expect(spyUpsert).toHaveBeenCalledWith(startDate, endDate);
  });
});
