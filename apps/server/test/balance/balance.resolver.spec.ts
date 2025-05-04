import { Test, TestingModule } from '@nestjs/testing';
import { BalanceResolver } from '../../src/balance/balance.resolver';
import { GetBalanceDto } from '../../src/balance/infraestructura/dto/get-balance.dto';
import { BalanceService } from '../../src/balance/services/balance.service';
import { ExternalBalanceMother } from './domain/external-balance.mother';

describe('BalanceResolver', () => {
  let resolver: BalanceResolver;
  let balanceService: Partial<BalanceService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BalanceResolver,
        {
          provide: BalanceService,
          useValue: {
            findByDateRange: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<BalanceResolver>(BalanceResolver);
    balanceService = module.get<BalanceService>(BalanceService);
  });

  describe('getBalanceByDateRange', () => {
    it('should return balance data by date range', async () => {
      const balanceData = {
        date: new Date('2025-04-25'),
      };

      const { startDate, endDate } =
        ExternalBalanceMother.generateQueryString();
      const balanceDto: GetBalanceDto = {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      };

      jest
        .spyOn(balanceService, 'findByDateRange')
        .mockResolvedValue(balanceData);

      const result = await resolver.getBalanceByDateRange(balanceDto);
      expect(result).toEqual(balanceData);
      expect(balanceService.findByDateRange).toHaveBeenCalledWith(
        balanceDto.startDate,
        balanceDto.endDate,
      );
    });
  });
});
