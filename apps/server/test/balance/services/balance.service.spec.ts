import { Test, TestingModule } from '@nestjs/testing';
import { BalanceService } from '../../../src/balance/services/balance.service';
import { MongoEnergyBalanceRepository } from '../../../src/balance/infraestructura/repositories/mongo-energy-balance.repository';
import { ExternalBalanceMother } from '../domain/external-balance.mother';
import { EnergyBalanceRepository } from '../../../src/balance/domain/energy-balance.repository';
import { ExternalBalanceApi } from '../../../src/balance/infraestructura/external-balance.api';

const externalBalanceApiMock = {
  getBalanceByDateRange: jest.fn(),
};

describe('BalanceService', () => {
  let service: BalanceService;
  let repositoryMock: Partial<EnergyBalanceRepository>;

  beforeEach(async () => {
    repositoryMock = {
      findByStartAndEndDate: jest.fn().mockResolvedValue([]),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BalanceService,
        {
          provide: MongoEnergyBalanceRepository,
          useValue: repositoryMock,
        },
        {
          provide: ExternalBalanceApi,
          useValue: externalBalanceApiMock,
        },
      ],
    }).compile();

    service = module.get<BalanceService>(BalanceService);
  });

  it('should call repository.findByStartAndEndDate with correct dates', async () => {
    const spy = jest.spyOn(repositoryMock, 'findByStartAndEndDate');
    const { startDate, endDate } = ExternalBalanceMother.generateQueryString();

    await service.findByDateRange(new Date(startDate), new Date(endDate));

    expect(spy).toHaveBeenCalledWith(new Date(startDate), new Date(endDate));
  });

  it('should return the data from repository.findByStartAndEndDate', async () => {
    const sampleResult = [{ value: 123 }];
    (repositoryMock.findByStartAndEndDate as jest.Mock).mockResolvedValue(
      sampleResult,
    );
    const { startDate, endDate } = ExternalBalanceMother.generateQueryString();

    const result = await service.findByDateRange(
      new Date(startDate),
      new Date(endDate),
    );

    expect(result).toBe(sampleResult);
  });
});
