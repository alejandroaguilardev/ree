import { Test, TestingModule } from '@nestjs/testing';
import { BalanceResolver } from '../../src/balance/balance.resolver';
import { BalanceService } from '../../src/balance/services/balance.service';

describe('BalanceResolver', () => {
  let resolver: BalanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalanceResolver, BalanceService],
    }).compile();

    resolver = module.get<BalanceResolver>(BalanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
